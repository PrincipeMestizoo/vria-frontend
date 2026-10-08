import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { ProductService } from '../../../core/services/product.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ConfirmDialogService } from '../../../shared/services/confirm-dialog.service';
import { ProductResponseDTO } from '../../../core/models';
import { STOCK_LEVEL_LABELS, getStockLevel } from '../../../shared/utils/stock-level';
import { firstErrorMessage } from '../../../shared/utils/form-errors';

@Component({
  selector: 'app-stock-out-dialog',
  templateUrl: './stock-out-dialog.component.html',
  styleUrl: './stock-out-dialog.component.scss',
})
export class StockOutDialogComponent {
  readonly levelLabels = STOCK_LEVEL_LABELS;
  readonly product: ProductResponseDTO;
  loading = false;
  imageFailed: boolean;

  readonly form = this.fb.nonNullable.group({
    quantity: [1, [Validators.required, Validators.min(1)]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly productService: ProductService,
    private readonly notification: NotificationService,
    private readonly confirmDialog: ConfirmDialogService,
    // Devuelve el producto actualizado al cerrar, o undefined si se cancela
    private readonly dialogRef: MatDialogRef<StockOutDialogComponent, ProductResponseDTO>,
    @Inject(MAT_DIALOG_DATA) data: { product: ProductResponseDTO }
  ) {
    this.product = data.product;
    this.imageFailed = !data.product.photo;
    this.form.controls.quantity.addValidators(Validators.max(data.product.stock));
  }

  get quantity(): number {
    return Number(this.form.controls.quantity.value) || 0;
  }

  // Stock con el que quedaria el producto tras la salida
  get remainingStock(): number {
    return Math.max(this.product.stock - this.quantity, 0);
  }

  get remainingLevel() {
    return getStockLevel(this.remainingStock);
  }

  get quantityError(): string {
    const control = this.form.controls.quantity;
    if (control.hasError('max')) {
      return `Solo hay ${this.product.stock} und. disponibles.`;
    }
    return firstErrorMessage(control, 'La cantidad');
  }

  setAll(): void {
    this.form.controls.quantity.setValue(this.product.stock);
    this.form.controls.quantity.markAsTouched();
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const quantity = this.quantity;
    this.confirmDialog
      .confirm({
        title: 'Confirmar salida de stock',
        message: `Se descontarán ${quantity} und. de "${this.product.nameProduct}". El stock pasará de ${this.product.stock} a ${this.remainingStock} und. ¿Deseas continuar?`,
        confirmLabel: 'Sí, registrar',
      })
      .subscribe((confirmed) => {
        if (confirmed) {
          this.reduce(quantity);
        }
      });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  private reduce(quantity: number): void {
    this.loading = true;
    this.productService
      .reduceStock(this.product.idProduct, quantity)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((updated) => {
        this.notification.success(
          `Salida registrada: ${quantity} und. de ${updated.nameProduct}. Stock actual: ${updated.stock} und.`
        );
        this.dialogRef.close(updated);
      });
  }
}
