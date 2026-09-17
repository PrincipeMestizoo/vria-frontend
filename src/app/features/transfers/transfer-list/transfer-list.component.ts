import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { TransferService } from '../../../core/services/transfer.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ConfirmDialogService } from '../../../shared/services/confirm-dialog.service';
import { AuthService } from '../../../core/services/auth.service';
import { TransferDTO } from '../../../core/models';
import { TransferFormComponent } from '../transfer-form/transfer-form.component';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrl: './transfer-list.component.scss',
})
export class TransferListComponent implements OnInit {
  readonly displayedColumns = ['nameClient', 'bank', 'destination', 'dateTransfer', 'amount', 'actions'];
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

  applyFilter(): void {
    const term = this.searchTerm.trim().toLowerCase();
    this.filtered = term
      ? this.transfers.filter(
          (t) =>
            t.nameClient.toLowerCase().includes(term) ||
            t.bank.toLowerCase().includes(term) ||
            t.destination.toLowerCase().includes(term)
        )
      : this.transfers;
  }

  openForm(): void {
    const ref = this.dialog.open(TransferFormComponent, {
      width: '520px',
      maxWidth: '95vw',
      autoFocus: false,
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
