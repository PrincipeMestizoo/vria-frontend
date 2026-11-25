import { Component, Inject } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { firstErrorMessage } from '../../../shared/utils/form-errors';
import { MAX_REASON_LENGTH } from '../domain/delivery-workflow';

export interface DeliveryReasonDialogData {
  title: string;
  message: string;
  confirmLabel: string;
  danger?: boolean;
  placeholder?: string;
}

/**
 * Confirmación que exige justificar el motivo (retrocesos y eliminaciones).
 * Cierra con el motivo normalizado, o `undefined` si se cancela.
 */
@Component({
  selector: 'app-delivery-reason-dialog',
  templateUrl: './delivery-reason-dialog.component.html',
})
export class DeliveryReasonDialogComponent {
  readonly maxLength = MAX_REASON_LENGTH;
  readonly reason = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.maxLength(MAX_REASON_LENGTH), notBlank],
  });

  constructor(
    private readonly dialogRef: MatDialogRef<DeliveryReasonDialogComponent, string>,
    @Inject(MAT_DIALOG_DATA) readonly data: DeliveryReasonDialogData
  ) {}

  get error(): string {
    return firstErrorMessage(this.reason, 'El motivo');
  }

  confirm(): void {
    if (this.reason.invalid) {
      this.reason.markAsTouched();
      return;
    }
    this.dialogRef.close(this.reason.value.trim());
  }

  cancel(): void {
    this.dialogRef.close();
  }
}

function notBlank(control: AbstractControl<string>): ValidationErrors | null {
  return control.value && !control.value.trim() ? { required: true } : null;
}
