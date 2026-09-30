import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { CategoryService } from '../../../core/services/category.service';
import { NotificationService } from '../../../core/services/notification.service';
import { CategoryDTO } from '../../../core/models';
import { firstErrorMessage } from '../../../shared/utils/form-errors';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss',
})
export class CategoryFormComponent {
  loading = false;
  readonly isEdit: boolean;

  readonly form = this.fb.nonNullable.group({
    nameCategory: ['', [Validators.required]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly categoryService: CategoryService,
    private readonly notification: NotificationService,
    private readonly dialogRef: MatDialogRef<CategoryFormComponent, boolean>,
    @Inject(MAT_DIALOG_DATA) public readonly data: { category: CategoryDTO | null }
  ) {
    this.isEdit = !!data.category;
    if (data.category) {
      this.form.patchValue({
        nameCategory: data.category.nameCategory,
      });
    }
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
