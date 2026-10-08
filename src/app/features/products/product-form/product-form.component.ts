import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, finalize, of, switchMap, tap } from 'rxjs';
import { ProductService } from '../../../core/services/product.service';
import { CategoryService } from '../../../core/services/category.service';
import { NotificationService } from '../../../core/services/notification.service';
import {
  ALLOWED_IMAGE_TYPES,
  CloudinaryService,
  MAX_IMAGE_SIZE_BYTES,
} from '../../../core/services/cloudinary.service';
import { CategoryDTO, ProductRequestDTO, ProductResponseDTO } from '../../../core/models';
import { firstErrorMessage } from '../../../shared/utils/form-errors';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent implements OnInit, OnDestroy {
  loading = false;
  loadingCategories = true;
  readonly isEdit: boolean;
  categories: CategoryDTO[] = [];

  readonly acceptedImageTypes = ALLOWED_IMAGE_TYPES.join(',');
  selectedFile: File | null = null;
  previewUrl: string | null = null;
  imageError: string | null = null;
  private objectUrl: string | null = null;
  private createdProductId: number | null = null;
  private uploadFailed = false;

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
    private readonly cloudinaryService: CloudinaryService,
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
      this.previewUrl = data.product.photo;
    }
  }

  ngOnInit(): void {
    this.categoryService
      .findAll()
      .pipe(finalize(() => (this.loadingCategories = false)))
      .subscribe((categories) => (this.categories = categories));
  }

  ngOnDestroy(): void {
    this.revokeObjectUrl();
  }

  errorFor(controlName: string, label: string): string {
    return firstErrorMessage(this.form.get(controlName), label);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) {
      return;
    }

    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      this.imageError = 'Formato no permitido. Usa JPG, PNG o WEBP.';
      return;
    }
    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      this.imageError = 'La imagen supera el tamaño máximo de 5 MB.';
      return;
    }

    this.imageError = null;
    this.selectedFile = file;
    this.revokeObjectUrl();
    this.objectUrl = URL.createObjectURL(file);
    this.previewUrl = this.objectUrl;
  }

  removeImage(): void {
    this.selectedFile = null;
    this.imageError = null;
    this.revokeObjectUrl();
    this.previewUrl = null;
    this.form.controls.photo.setValue('');
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
    const request$ = this.isEdit ? this.saveEdit(payload) : this.saveNew(payload);

    request$.pipe(finalize(() => (this.loading = false))).subscribe({
      next: () => {
        this.notification.success(this.isEdit ? 'Producto actualizado.' : 'Producto creado.');
        this.dialogRef.close(true);
      },
      error: () => {
        // Los errores de la API los notifica el interceptor; los de Cloudinary no pasan por él
        if (this.uploadFailed) {
          this.notification.error(
            this.createdProductId !== null
              ? 'Producto creado, pero no se pudo subir la imagen.'
              : 'No se pudo subir la imagen.'
          );
        }
        // El producto ya existe aunque la foto haya fallado: refrescar el listado
        if (this.createdProductId !== null) {
          this.dialogRef.close(true);
        }
      },
    });
  }

  cancel(): void {
    this.dialogRef.close(false);
  }

  // Edicion: el id ya existe, se sube la imagen primero y se envia el formulario con la URL
  private saveEdit(payload: ProductRequestDTO): Observable<ProductResponseDTO> {
    const id = this.data.product!.idProduct;
    return this.uploadSelected(id).pipe(
      switchMap((url) => this.productService.update(id, { ...payload, photo: url ?? payload.photo }))
    );
  }

  // Creacion: el id lo asigna el backend, asi que se crea, se sube "product{id}" y se actualiza la foto
  private saveNew(payload: ProductRequestDTO): Observable<ProductResponseDTO> {
    this.createdProductId = null;
    return this.productService.create(payload).pipe(
      switchMap((created) => {
        this.createdProductId = created.idProduct;
        return this.uploadSelected(created.idProduct).pipe(
          switchMap((url) =>
            url ? this.productService.update(created.idProduct, { ...payload, photo: url }) : of(created)
          )
        );
      })
    );
  }

  private uploadSelected(idProduct: number): Observable<string | null> {
    this.uploadFailed = false;
    if (!this.selectedFile) {
      return of(null);
    }
    // Las subidas unsigned no sobrescriben: al reemplazar en edicion se agrega un sufijo unico
    const publicId = this.isEdit ? `product${idProduct}_${Date.now()}` : `product${idProduct}`;
    return this.cloudinaryService.uploadImage(this.selectedFile, publicId).pipe(
      tap({ error: () => (this.uploadFailed = true) })
    );
  }

  private revokeObjectUrl(): void {
    if (this.objectUrl) {
      URL.revokeObjectURL(this.objectUrl);
      this.objectUrl = null;
    }
  }
}
