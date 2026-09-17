import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { DeliveryService } from '../../../core/services/delivery.service';
import { NotificationService } from '../../../core/services/notification.service';
import { DELIVERY_STATES, DeliveryDTO, PAY_MODES, PayMode, StateDelivery } from '../../../core/models';
import { firstErrorMessage } from '../../../shared/utils/form-errors';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrl: './delivery-form.component.scss',
})
export class DeliveryFormComponent {
  loading = false;
  readonly payModes: PayMode[] = PAY_MODES;
  readonly states: StateDelivery[] = DELIVERY_STATES;

  readonly form = this.fb.nonNullable.group({
    nameClient: ['', [Validators.required]],
    nameDelivery: ['', [Validators.required]],
    address: ['', [Validators.required]],
    payMode: ['CASH' as PayMode, [Validators.required]],
    dateDelivery: ['', [Validators.required]],
    state: ['PREPARING' as StateDelivery, [Validators.required]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly deliveryService: DeliveryService,
    private readonly notification: NotificationService,
    private readonly dialogRef: MatDialogRef<DeliveryFormComponent, boolean>
  ) {}

  errorFor(controlName: string, label: string): string {
    return firstErrorMessage(this.form.get(controlName), label);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    const payload: DeliveryDTO = {
      idDelivery: null,
      nameClient: value.nameClient,
      nameDelivery: value.nameDelivery,
      address: value.address,
      payMode: value.payMode,
      dateDelivery: value.dateDelivery,
      state: value.state,
    };

    this.loading = true;
    this.deliveryService
      .create(payload)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => {
          this.notification.success('Entrega registrada.');
          this.dialogRef.close(true);
        },
      });
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
