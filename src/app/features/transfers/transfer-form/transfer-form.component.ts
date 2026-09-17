import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { TransferService } from '../../../core/services/transfer.service';
import { NotificationService } from '../../../core/services/notification.service';
import { TransferDTO } from '../../../core/models';
import { firstErrorMessage } from '../../../shared/utils/form-errors';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrl: './transfer-form.component.scss',
})
export class TransferFormComponent {
  loading = false;

  readonly form = this.fb.nonNullable.group({
    nameClient: ['', [Validators.required]],
    amount: [0, [Validators.required, Validators.min(0.01)]],
    bank: ['', [Validators.required]],
    destination: ['', [Validators.required]],
    dateTransfer: ['', [Validators.required]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly transferService: TransferService,
    private readonly notification: NotificationService,
    private readonly dialogRef: MatDialogRef<TransferFormComponent, boolean>
  ) {}

  errorFor(controlName: string, label: string): string {
    return firstErrorMessage(this.form.get(controlName), label);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload: TransferDTO = { idTransfer: null, ...this.form.getRawValue() };

    this.loading = true;
    this.transferService
      .create(payload)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => {
          this.notification.success('Comprobante de transferencia registrado.');
          this.dialogRef.close(true);
        },
      });
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
