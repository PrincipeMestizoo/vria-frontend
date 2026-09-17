import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { TypeCategoryService } from '../../../core/services/type-category.service';
import { NotificationService } from '../../../core/services/notification.service';
import { TypeCategoryDTO } from '../../../core/models';
import { firstErrorMessage } from '../../../shared/utils/form-errors';

@Component({
  selector: 'app-type-category-form',
  templateUrl: './type-category-form.component.html',
  styleUrl: './type-category-form.component.scss',
})
export class TypeCategoryFormComponent {
  loading = false;
  readonly isEdit: boolean;

  readonly form = this.fb.nonNullable.group({
    nameTypeCategory: ['', [Validators.required]],
    description: [''],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly typeCategoryService: TypeCategoryService,
    private readonly notification: NotificationService,
    private readonly dialogRef: MatDialogRef<TypeCategoryFormComponent, boolean>,
    @Inject(MAT_DIALOG_DATA) public readonly data: { typeCategory: TypeCategoryDTO | null }
  ) {
    this.isEdit = !!data.typeCategory;
    if (data.typeCategory) {
      this.form.patchValue({
        nameTypeCategory: data.typeCategory.nameTypeCategory,
        description: data.typeCategory.description ?? '',
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

    const payload: TypeCategoryDTO = {
      idTypeCategory: this.data.typeCategory?.idTypeCategory ?? null,
      ...this.form.getRawValue(),
    };

    this.loading = true;
    const request$ = this.isEdit
      ? this.typeCategoryService.update(payload.idTypeCategory as number, payload)
      : this.typeCategoryService.create(payload);

    request$.pipe(finalize(() => (this.loading = false))).subscribe({
      next: () => {
        this.notification.success(this.isEdit ? 'Tipo de categoría actualizado.' : 'Tipo de categoría creado.');
        this.dialogRef.close(true);
      },
    });
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
