import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { CategoryService } from '../../../core/services/category.service';
import { TypeCategoryService } from '../../../core/services/type-category.service';
import { NotificationService } from '../../../core/services/notification.service';
import { CategoryDTO, TypeCategoryDTO } from '../../../core/models';
import { firstErrorMessage } from '../../../shared/utils/form-errors';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss',
})
export class CategoryFormComponent implements OnInit {
  loading = false;
  loadingTypes = true;
  readonly isEdit: boolean;
  types: TypeCategoryDTO[] = [];

  readonly form = this.fb.nonNullable.group({
    nameCategory: ['', [Validators.required]],
    idTypeCategory: [null as number | null, [Validators.required]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly categoryService: CategoryService,
    private readonly typeCategoryService: TypeCategoryService,
    private readonly notification: NotificationService,
    private readonly dialogRef: MatDialogRef<CategoryFormComponent, boolean>,
    @Inject(MAT_DIALOG_DATA) public readonly data: { category: CategoryDTO | null }
  ) {
    this.isEdit = !!data.category;
    if (data.category) {
      this.form.patchValue({
        nameCategory: data.category.nameCategory,
        idTypeCategory: data.category.idTypeCategory,
      });
    }
  }

  ngOnInit(): void {
    this.typeCategoryService
      .findAll()
      .pipe(finalize(() => (this.loadingTypes = false)))
      .subscribe((types) => (this.types = types));
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
    const payload: CategoryDTO = {
      idCategory: this.data.category?.idCategory ?? null,
      nameCategory: value.nameCategory,
      idTypeCategory: value.idTypeCategory as number,
    };

    this.loading = true;
    const request$ = this.isEdit
      ? this.categoryService.update(payload.idCategory as number, payload)
      : this.categoryService.create(payload);

    request$.pipe(finalize(() => (this.loading = false))).subscribe({
      next: () => {
        this.notification.success(this.isEdit ? 'Categoría actualizada.' : 'Categoría creada.');
        this.dialogRef.close(true);
      },
    });
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
