import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { DeliveryService } from '../../../core/services/delivery.service';
import { NotificationService } from '../../../core/services/notification.service';
import { AuthService } from '../../../core/services/auth.service';
import { DELIVERY_STATES, DeliveryDTO, StateDelivery } from '../../../core/models';
import { DeliveryFormComponent } from '../delivery-form/delivery-form.component';
import {
  DeliveryHistoryDialogComponent,
  DeliveryHistoryDialogData,
} from '../delivery-history-dialog/delivery-history-dialog.component';
import { DeliveryWorkflowService } from '../domain/delivery-workflow.service';
import { canDeleteDelivery, canTransition, canViewDeliveryHistory } from '../domain/delivery-workflow';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrl: './delivery-list.component.scss',
})
export class DeliveryListComponent implements OnInit {
  readonly displayedColumns = ['nameClient', 'nameDelivery', 'nameUser', 'payMode', 'dateDelivery', 'state', 'actions'];
  readonly states: StateDelivery[] = DELIVERY_STATES;
  loading = true;
  deliveries: DeliveryDTO[] = [];
  filtered: DeliveryDTO[] = [];
  searchTerm = '';
  stateFilter: StateDelivery | 'ALL' = 'ALL';

  constructor(
    private readonly deliveryService: DeliveryService,
    private readonly notification: NotificationService,
    private readonly dialog: MatDialog,
    private readonly workflow: DeliveryWorkflowService,
    readonly authService: AuthService
  ) {}

  get canManage(): boolean {
    return this.authService.hasAnyRole(['ADMIN', 'COMMERCIAL_ADVISOR']);
  }

  canDelete(delivery: DeliveryDTO): boolean {
    return this.authService.hasAnyRole(['ADMIN', 'COMMERCIAL_ADVISOR']) && canDeleteDelivery(delivery);
  }

  canViewHistory(delivery: DeliveryDTO): boolean {
    return canViewDeliveryHistory(this.authService.currentUser, delivery);
  }

  openHistory(delivery: DeliveryDTO): void {
    const data: DeliveryHistoryDialogData = { delivery };
    this.dialog.open(DeliveryHistoryDialogComponent, { width: '560px', maxWidth: '95vw', autoFocus: false, data });
  }

  /** Opción habilitada en el selector: el estado actual o una transición permitida. */
  isStateSelectable(delivery: DeliveryDTO, state: StateDelivery): boolean {
    return state === delivery.state || canTransition(delivery.state, state);
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.deliveryService
      .findAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((data) => {
        this.deliveries = data;
        this.applyFilter();
      });
  }

  applyFilter(): void {
    const term = this.searchTerm.trim().toLowerCase();
    this.filtered = this.deliveries.filter((d) => {
      const matchesState = this.stateFilter === 'ALL' || d.state === this.stateFilter;
      const matchesTerm =
        !term ||
        d.nameClient.toLowerCase().includes(term) ||
        d.nameDelivery.toLowerCase().includes(term) ||
        d.address.toLowerCase().includes(term) ||
        (d.nameUser ?? '').toLowerCase().includes(term);
      return matchesState && matchesTerm;
    });
  }

  openForm(): void {
    const ref = this.dialog.open(DeliveryFormComponent, {
      width: '560px',
      maxWidth: '95vw',
      autoFocus: false,
    });

    ref.afterClosed().subscribe((changed) => {
      if (changed) {
        this.load();
      }
    });
  }

  changeState(delivery: DeliveryDTO, state: StateDelivery, select?: { value: StateDelivery }): void {
    const id = delivery.idDelivery;
    if (id == null || state === delivery.state) {
      return;
    }
    this.workflow.authorize(delivery, state).subscribe((approval) => {
      if (!approval) {
        if (select) select.value = delivery.state; // Revierte el selector si se cancela.
        return;
      }
      this.deliveryService.updateState(id, state, approval.reason).subscribe({
        next: (updated) => {
          delivery.state = updated.state;
          this.notification.success('Estado del domicilio actualizado.');
        },
        error: () => select && (select.value = delivery.state),
      });
    });
  }

  remove(delivery: DeliveryDTO): void {
    const id = delivery.idDelivery;
    if (id == null) {
      return;
    }
    this.workflow.authorizeDeletion(delivery).subscribe((approval) => {
      if (!approval) {
        return;
      }
      this.deliveryService.delete(id, approval.reason!).subscribe(() => {
        this.notification.success('Domicilio eliminado.');
        this.load();
      });
    });
  }
}
