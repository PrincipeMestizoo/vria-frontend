import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { TransferService } from '../../../core/services/transfer.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ReceiptDraftDTO, TransferDTO } from '../../../core/models';
import { firstErrorMessage } from '../../../shared/utils/form-errors';
import { IdempotencyKey } from '../../../shared/utils/idempotency-key';

const REQUIRED_TEXT = [Validators.required, Validators.pattern(/.*\S.*/)];
export interface TransferFormData {
  /** Comprobante elegido antes de abrir; sin él, el registro es manual. */
  file?: File;
}

const NARROW_WIDTH = '560px';
const WIDE_WIDTH = '980px';

type DraftField = 'amount' | 'bank' | 'reference' | 'currency' | 'dateTransfer';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrl: './transfer-form.component.scss',
})
export class TransferFormComponent {
  loading = false;
  readingReceipt = false;
  receiptAlreadyUsed = false;
  dateWithoutTime = false;
  readonly initialFile = inject<TransferFormData | null>(MAT_DIALOG_DATA)?.file ?? null;
  hasPreview = false;

  private receiptId: string | null = null;
  private prefilled: Partial<Record<DraftField, string | number>> = {};
  private readonly idempotencyKey = new IdempotencyKey();

  readonly form = this.fb.group({
    nameClient: this.fb.nonNullable.control('', [...REQUIRED_TEXT, Validators.maxLength(150)]),
    amount: this.fb.control<number | null>(null, [
      Validators.required,
      Validators.min(0.01),
      Validators.pattern(/^\d{1,12}(\.\d{1,2})?$/),
    ]),
    currency: this.fb.nonNullable.control('COP', [Validators.required, Validators.pattern(/^[A-Za-z]{3}$/)]),
    bank: this.fb.nonNullable.control('', [...REQUIRED_TEXT, Validators.maxLength(100)]),
    reference: this.fb.nonNullable.control('', [...REQUIRED_TEXT, Validators.maxLength(100)]),
    destination: this.fb.nonNullable.control('', [...REQUIRED_TEXT, Validators.maxLength(150)]),
    dateTransfer: this.fb.nonNullable.control('', [Validators.required]),
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

  onAttachedChange(attached: boolean): void {
    this.hasPreview = attached;
    this.dialogRef.updateSize(attached ? WIDE_WIDTH : NARROW_WIDTH);
  }

  onReceiptChange(receiptId: string | null): void {
    this.receiptId = receiptId;
  }

  applyDraft(draft: ReceiptDraftDTO | null): void {
    this.clearPrefilled();
    this.dateWithoutTime = !!draft?.date;
    if (!draft) {
      return;
    }

    const values: Record<DraftField, string | number | null> = {
      amount: draft.amount,
      bank: draft.bank,
      reference: draft.reference,
      currency: draft.currency,
      dateTransfer: draft.date ? `${draft.date}T00:00` : null,
    };
    for (const [field, value] of Object.entries(values) as [DraftField, string | number | null][]) {
      if (value !== null && value !== '') {
        this.form.controls[field].setValue(value as never);
        this.form.controls[field].markAsTouched();
        this.prefilled[field] = value;
      }
    }
  }

  submit(): void {
    if (this.readingReceipt || this.receiptAlreadyUsed || this.loading) {
      return;
    }
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    const payload: TransferDTO = {
      ...value,
      idTransfer: null,
      amount: value.amount!,
      currency: value.currency.toUpperCase(),
      receiptId: this.receiptId,
    };

    this.loading = true;
    this.transferService
      .create(payload, this.idempotencyKey.for(payload))
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => {
          this.notification.success('Transferencia registrada.');
          this.dialogRef.close(true);
        },
      });
  }

  cancel(): void {
    this.dialogRef.close(false);
  }

  // Al cambiar de comprobante no deben quedar datos del anterior; lo editado a mano se conserva
  private clearPrefilled(): void {
    for (const [field, value] of Object.entries(this.prefilled) as [DraftField, string | number][]) {
      const control = this.form.controls[field];
      if (control.value === value) {
        control.reset();
      }
    }
    this.prefilled = {};
  }
}
