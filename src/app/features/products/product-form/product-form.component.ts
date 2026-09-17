import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { ProductService } from '../../../core/services/product.service';
import { CategoryService } from '../../../core/services/category.service';
import { NotificationService } from '../../../core/services/notification.service';
import { CategoryDTO, ProductRequestDTO, ProductResponseDTO } from '../../../core/models';
import { firstErrorMessage } from '../../../shared/utils/form-errors';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent implements OnInit {
  loading = false;
  loadingCategories = true;
  readonly isEdit: boolean;
  categories: CategoryDTO[] = [];

  readonly form = this.fb.nonNullable.group({
    nameProduct: ['', [Validators.required]],
    idCategory: [null as number | null, [Validators.required]],
    stock: [0, [Validators.required, Validators.min(0)]],
    price: [0, [Validators.required, Validators.min(0.01)]],
    reference: [''],
    description: [''],
    photo: [''],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService,
    private readonly notification: NotificationService,
    private readonly dialogRef: MatDialogRef<ProductFormComponent, boolean>,
    @Inject(MAT_DIALOG_DATA) public readonly data: { product: ProductResponseDTO | null }
  ) {
    this.isEdit = !!data.product;
    if (data.product) {
      this.form.patchValue({
        nameProduct: data.product.nameProduct,
        idCategory: data.product.idCategory,
        stock: data.product.stock,
        price: data.product.price,
        reference: data.product.reference ?? '',
        description: data.product.description ?? '',
        photo: data.product.photo ?? '',
      });
    }
  }

  ngOnInit(): void {
    this.categoryService
      .findAll()
      .pipe(finalize(() => (this.loadingCategories = false)))
      .subscribe((categories) => (this.categories = categories));
  }

  errorFor(controlName: string, label: string): string {
    return firstErrorMessage(this.form.get(controlName), label);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    const payload: ProductRequestDTO = {
      nameProduct: value.nameProduct,
      idCategory: value.idCategory as number,
      stock: value.stock,
      price: value.price,
      reference: value.reference || null,
      description: value.description || null,
      photo: value.photo || null,
    };

    this.loading = true;
    const request$ = this.isEdit
      ? this.productService.update(this.data.product!.idProduct, payload)
      : this.productService.create(payload);

    request$.pipe(finalize(() => (this.loading = false))).subscribe({
      next: () => {
        this.notification.success(this.isEdit ? 'Producto actualizado.' : 'Producto creado.');
        this.dialogRef.close(true);
      },
    });
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
