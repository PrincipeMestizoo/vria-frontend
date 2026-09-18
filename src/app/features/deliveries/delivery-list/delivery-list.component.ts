import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { DeliveryService } from '../../../core/services/delivery.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ConfirmDialogService } from '../../../shared/services/confirm-dialog.service';
import { AuthService } from '../../../core/services/auth.service';
import { DELIVERY_STATES, DeliveryDTO, StateDelivery } from '../../../core/models';
import { DeliveryFormComponent } from '../delivery-form/delivery-form.component';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrl: './delivery-list.component.scss',
})
export class DeliveryListComponent implements OnInit {
  readonly displayedColumns = ['nameClient', 'nameDelivery', 'payMode', 'dateDelivery', 'state', 'actions'];
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
    private readonly confirmDialog: ConfirmDialogService,
    readonly authService: AuthService
  ) {}

  get canManage(): boolean {
    return this.authService.hasAnyRole(['ADMIN', 'COMMERCIAL_ADVISOR']);
  }

  get canDelete(): boolean {
    return this.authService.hasAnyRole(['ADMIN', 'COMMERCIAL_ADVISOR']);
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
        d.address.toLowerCase().includes(term);
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

  changeState(delivery: DeliveryDTO, state: StateDelivery): void {
    if (delivery.idDelivery == null || state === delivery.state) {
      return;
    }
    this.deliveryService.updateState(delivery.idDelivery, state).subscribe((updated) => {
      delivery.state = updated.state;
      this.notification.success('Estado de la entrega actualizado.');
    });
  }

  remove(delivery: DeliveryDTO): void {
    this.confirmDialog
      .confirm({
        title: 'Eliminar entrega',
        message: `¿Seguro que deseas eliminar la entrega de "${delivery.nameClient}"?`,
        danger: true,
        confirmLabel: 'Eliminar',
      })
      .subscribe((confirmed) => {
        if (!confirmed || delivery.idDelivery == null) {
          return;
        }
        this.deliveryService.delete(delivery.idDelivery).subscribe(() => {
          this.notification.success('Entrega eliminada.');
          this.load();
        });
      });
  }
}
