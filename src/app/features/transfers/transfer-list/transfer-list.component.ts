import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { TransferService } from '../../../core/services/transfer.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ConfirmDialogService } from '../../../shared/services/confirm-dialog.service';
import { AuthService } from '../../../core/services/auth.service';
import {
  TRANSFER_STATUS_LABELS,
  TRANSFER_STATUSES,
  TransferDTO,
  TransferStatus,
} from '../../../core/models';
import { TransferFormComponent, TransferFormData } from '../transfer-form/transfer-form.component';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrl: './transfer-list.component.scss',
})
export class TransferListComponent implements OnInit {
  readonly displayedColumns = [
    'nameClient',
    'bank',
    'reference',
    'destination',
    'dateTransfer',
    'amount',
    'status',
    'actions',
  ];
  readonly statuses = TRANSFER_STATUSES;
  readonly statusLabels = TRANSFER_STATUS_LABELS;
  /** Transferencia cuyo estado se está guardando; evita envíos simultáneos. */
  savingStatusId: number | null = null;
  loading = true;
  transfers: TransferDTO[] = [];
  filtered: TransferDTO[] = [];
  searchTerm = '';

  constructor(
    private readonly transferService: TransferService,
    private readonly notification: NotificationService,
    private readonly dialog: MatDialog,
    private readonly confirmDialog: ConfirmDialogService,
    readonly authService: AuthService
  ) {}

  get canChangeStatus(): boolean {
    return this.authService.hasAnyRole(['ADMIN']);
  }

  get canDelete(): boolean {
    return this.authService.hasAnyRole(['ADMIN']);
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.transferService
      .findAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((data) => {
        this.transfers = data;
        this.applyFilter();
      });
  }

  statusLabel(transfer: TransferDTO): string {
    return transfer.status ? TRANSFER_STATUS_LABELS[transfer.status] : '—';
  }

  changeStatus(transfer: TransferDTO, status: TransferStatus): void {
    if (transfer.idTransfer == null || transfer.status === status || this.savingStatusId !== null) {
      return;
    }
    this.savingStatusId = transfer.idTransfer;
    this.transferService
      .updateStatus(transfer.idTransfer, status)
      .pipe(finalize(() => (this.savingStatusId = null)))
      .subscribe((updated) => {
        this.transfers = this.transfers.map((t) => (t.idTransfer === updated.idTransfer ? updated : t));
        this.applyFilter();
        this.notification.success('Estado actualizado.');
      });
  }

  applyFilter(): void {
    const term = this.searchTerm.trim().toLowerCase();
    this.filtered = term
      ? this.transfers.filter(
          (t) =>
            t.nameClient.toLowerCase().includes(term) ||
            t.bank.toLowerCase().includes(term) ||
            t.destination.toLowerCase().includes(term) ||
            !!t.reference?.toLowerCase().includes(term)
        )
      : this.transfers;
  }

  openForm(file?: File): void {
    const ref = this.dialog.open<TransferFormComponent, TransferFormData, boolean>(TransferFormComponent, {
      data: { file },
      width: '560px',
      maxWidth: '95vw',
      panelClass: 'transfer-dialog',
      autoFocus: false,
      // Un toque fuera no debe descartar el comprobante ni lo ya escrito
      disableClose: true,
    });

    ref.afterClosed().subscribe((changed) => {
      if (changed) {
        this.load();
      }
    });
  }

  remove(transfer: TransferDTO): void {
    this.confirmDialog
      .confirm({
        title: 'Eliminar transferencia',
        message: `¿Seguro que deseas eliminar la transferencia de "${transfer.nameClient}"?`,
        danger: true,
        confirmLabel: 'Eliminar',
      })
      .subscribe((confirmed) => {
        if (!confirmed || transfer.idTransfer == null) {
          return;
        }
        this.transferService.delete(transfer.idTransfer).subscribe(() => {
          this.notification.success('Transferencia eliminada.');
          this.load();
        });
      });
  }
}
