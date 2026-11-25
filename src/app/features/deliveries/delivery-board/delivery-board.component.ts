import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { filter, finalize, switchMap } from 'rxjs';
import { DELIVERY_STATES, DeliveryDTO, StateDelivery } from '../../../core/models';
import { DeliveryService } from '../../../core/services/delivery.service';
import { NotificationService } from '../../../core/services/notification.service';
import { AuthService } from '../../../core/services/auth.service';
import { DeliveryFormComponent, DeliveryFormData } from '../delivery-form/delivery-form.component';
import {
  DeliveryHistoryDialogComponent,
  DeliveryHistoryDialogData,
} from '../delivery-history-dialog/delivery-history-dialog.component';
import { DeliveryWorkflowService } from '../domain/delivery-workflow.service';
import {
  DELIVERY_COLUMNS,
  DeliveryColumnMeta,
  DeliveryTransition,
  DeliveryUrgency,
  URGENCY_LABELS,
  availableTransitions,
  canDeleteDelivery,
  canTransition,
  canViewDeliveryHistory,
  compareDeliveries,
  deliveryUrgency,
  nextTransition,
  stateIndex,
} from '../domain/delivery-workflow';

const DELIVERED_PAGE_SIZE = 10;

@Component({
  selector: 'app-delivery-board',
  templateUrl: './delivery-board.component.html',
  styleUrl: './delivery-board.component.scss',
})
export class DeliveryBoardComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  readonly columns: DeliveryColumnMeta[] = DELIVERY_COLUMNS;
  readonly steps = DELIVERY_STATES;
  readonly urgencyLabels = URGENCY_LABELS;

  loading = true;
  isCompact = false;
  activeState: StateDelivery = 'PREPARING';

  searchTerm = '';
  onlyOverdue = false;

  deliveries: DeliveryDTO[] = [];
  board: Record<StateDelivery, DeliveryDTO[]> = this.emptyBoard();
  deliveredLimit = DELIVERED_PAGE_SIZE;

  /** Estado que se está arrastrando, para resaltar columnas destino válidas. */
  draggingFrom: StateDelivery | null = null;
  /** Ids con un cambio en curso contra el backend. */
  readonly pending = new Set<number>();

  stats = { active: 0, overdue: 0, today: 0, delivered: 0 };

  constructor(
    private readonly deliveryService: DeliveryService,
    private readonly workflow: DeliveryWorkflowService,
    private readonly notification: NotificationService,
    private readonly dialog: MatDialog,
    private readonly breakpoints: BreakpointObserver,
    readonly authService: AuthService
  ) {}

  get canManage(): boolean {
    return this.authService.hasAnyRole(['ADMIN', 'COMMERCIAL_ADVISOR']);
  }

  get dragEnabled(): boolean {
    return this.canManage && !this.isCompact;
  }

  ngOnInit(): void {
    this.breakpoints
      .observe('(max-width: 767.98px)')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => (this.isCompact = result.matches));

    this.load();
  }

  load(): void {
    this.loading = true;
    this.deliveryService
      .findAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((data) => {
        this.deliveries = data;
        this.rebuild();
      });
  }

  // -------------------------------------------------------------------------
  // Construcción del tablero
  // -------------------------------------------------------------------------

  rebuild(): void {
    const now = new Date();
    const term = this.searchTerm.trim().toLowerCase();
    const board = this.emptyBoard();
    const stats = { active: 0, overdue: 0, today: 0, delivered: 0 };

    for (const d of this.deliveries) {
      const urgency = deliveryUrgency(d, now);
      if (d.state === 'DELIVERED') {
        stats.delivered++;
      } else {
        stats.active++;
        if (urgency === 'overdue') stats.overdue++;
        if (urgency === 'today') stats.today++;
      }

      if (this.onlyOverdue && urgency !== 'overdue') continue;
      if (term && !this.matches(d, term)) continue;
      board[d.state].push(d);
    }

    for (const state of DELIVERY_STATES) {
      board[state].sort((a, b) => compareDeliveries(a, b, now));
    }

    this.board = board;
    this.stats = stats;
  }

  visibleCards(state: StateDelivery): DeliveryDTO[] {
    const cards = this.board[state];
    return state === 'DELIVERED' ? cards.slice(0, this.deliveredLimit) : cards;
  }

  hiddenCount(state: StateDelivery): number {
    return state === 'DELIVERED' ? Math.max(0, this.board[state].length - this.deliveredLimit) : 0;
  }

  showMoreDelivered(): void {
    this.deliveredLimit += DELIVERED_PAGE_SIZE;
  }

  toggleOverdue(): void {
    this.onlyOverdue = !this.onlyOverdue;
    this.rebuild();
  }

  // -------------------------------------------------------------------------
  // Presentación de tarjetas
  // -------------------------------------------------------------------------

  urgency(d: DeliveryDTO): DeliveryUrgency {
    return deliveryUrgency(d);
  }

  stepReached(d: DeliveryDTO, step: StateDelivery): boolean {
    return stateIndex(step) <= stateIndex(d.state);
  }

  primaryAction(d: DeliveryDTO): DeliveryTransition | undefined {
    return nextTransition(d.state);
  }

  secondaryActions(d: DeliveryDTO): DeliveryTransition[] {
    return availableTransitions(d.state).filter((t) => t.kind === 'backward');
  }

  canDelete(d: DeliveryDTO): boolean {
    return this.canManage && canDeleteDelivery(d);
  }

  canViewHistory(d: DeliveryDTO): boolean {
    return canViewDeliveryHistory(this.authService.currentUser, d);
  }

  hasMenu(d: DeliveryDTO): boolean {
    return this.canViewHistory(d) || (this.canManage && (this.secondaryActions(d).length > 0 || this.canDelete(d)));
  }

  isPending(d: DeliveryDTO): boolean {
    return d.idDelivery != null && this.pending.has(d.idDelivery);
  }

  isValidTarget(state: StateDelivery): boolean {
    return this.draggingFrom != null && canTransition(this.draggingFrom, state);
  }

  trackById = (_: number, d: DeliveryDTO) => d.idDelivery;

  // -------------------------------------------------------------------------
  // Drag & drop (escritorio / tablet)
  // -------------------------------------------------------------------------

  /** Solo deja soltar la tarjeta en columnas que respetan el flujo. */
  enterPredicate = (drag: CdkDrag<DeliveryDTO>, drop: CdkDropList<StateDelivery>): boolean => {
    const d = drag.data;
    return d.state === drop.data || canTransition(d.state, drop.data);
  };

  onDragStarted(d: DeliveryDTO): void {
    this.draggingFrom = d.state;
  }

  onDragEnded(): void {
    this.draggingFrom = null;
  }

  onDrop(event: CdkDragDrop<StateDelivery, StateDelivery, DeliveryDTO>): void {
    if (event.previousContainer === event.container) {
      return; // El orden dentro de la columna lo define la regla de prioridad, no el usuario.
    }
    this.move(event.item.data, event.container.data);
  }

  // -------------------------------------------------------------------------
  // Acciones de negocio
  // -------------------------------------------------------------------------

  move(d: DeliveryDTO, to: StateDelivery): void {
    if (d.idDelivery == null || this.isPending(d)) {
      return;
    }
    const id = d.idDelivery;
    const previous = d.state;

    this.workflow
      .authorize(d, to)
      .pipe(
        filter(Boolean),
        switchMap(({ reason }) => {
          // Actualización optimista: la tarjeta cambia de columna de inmediato.
          this.pending.add(id);
          d.state = to;
          this.rebuild();
          return this.deliveryService.updateState(id, to, reason).pipe(finalize(() => this.pending.delete(id)));
        })
      )
      .subscribe({
        next: (updated) => {
          Object.assign(d, updated);
          this.rebuild();
          this.notification.success(`Domicilio de ${d.nameClient} movido a "${this.columnTitle(d.state)}".`);
        },
        error: () => {
          d.state = previous; // El interceptor ya notificó el error.
          this.rebuild();
        },
      });
  }

  remove(d: DeliveryDTO): void {
    const id = d.idDelivery;
    if (id == null) {
      return;
    }
    this.workflow
      .authorizeDeletion(d)
      .pipe(
        filter(Boolean),
        switchMap(({ reason }) => this.deliveryService.delete(id, reason!))
      )
      .subscribe(() => {
        this.deliveries = this.deliveries.filter((x) => x.idDelivery !== d.idDelivery);
        this.rebuild();
        this.notification.success('Domicilio eliminado.');
      });
  }

  openHistory(d: DeliveryDTO): void {
    const data: DeliveryHistoryDialogData = { delivery: d };
    this.dialog.open(DeliveryHistoryDialogComponent, { width: '560px', maxWidth: '95vw', autoFocus: false, data });
  }

  openForm(initialState: StateDelivery = 'PREPARING'): void {
    const data: DeliveryFormData = { initialState };
    this.dialog
      .open(DeliveryFormComponent, { width: '560px', maxWidth: '95vw', autoFocus: false, data })
      .afterClosed()
      .subscribe((changed) => changed && this.load());
  }

  columnTitle(state: StateDelivery): string {
    return this.columns.find((c) => c.state === state)?.title ?? state;
  }

  // -------------------------------------------------------------------------

  private matches(d: DeliveryDTO, term: string): boolean {
    return [d.nameClient, d.nameDelivery, d.address, d.nameUser ?? '']
      .some((value) => value.toLowerCase().includes(term));
  }

  private emptyBoard(): Record<StateDelivery, DeliveryDTO[]> {
    return { PREPARING: [], READY: [], SHIPPED: [], DELIVERED: [] };
  }
}
