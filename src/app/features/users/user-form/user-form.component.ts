import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { UserService } from '../../../core/services/user.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ALL_ROLES, TypeRole, UserRequestDTO, UserResponseDTO } from '../../../core/models';
import { firstErrorMessage } from '../../../shared/utils/form-errors';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  loading = false;
  hidePassword = true;
  readonly isEdit: boolean;
  readonly roles: TypeRole[] = ALL_ROLES;

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    enabled: [true, [Validators.required]],
    role: ['COMMERCIAL_ADVISOR' as TypeRole, [Validators.required]],
    password: [''],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly userService: UserService,
    private readonly notification: NotificationService,
    private readonly dialogRef: MatDialogRef<UserFormComponent, boolean>,
    @Inject(MAT_DIALOG_DATA) public readonly data: { user: UserResponseDTO | null }
  ) {
    this.isEdit = !!data.user;

    if (data.user) {
      this.form.patchValue({
        name: data.user.name,
        lastName: data.user.lastName,
        email: data.user.email,
        enabled: data.user.enabled,
        role: data.user.role,
      });
    }

    const passwordValidators = this.isEdit
      ? [Validators.minLength(8)]
      : [Validators.required, Validators.minLength(8)];
    this.form.get('password')?.setValidators(passwordValidators);
    this.form.get('password')?.updateValueAndValidity();
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
    const payload: UserRequestDTO = {
      name: value.name,
      lastName: value.lastName,
      email: value.email,
      enabled: value.enabled,
      role: value.role,
      password: value.password || null,
    };

    this.loading = true;
    const request$ = this.isEdit
      ? this.userService.update(this.data.user!.idUser, payload)
      : this.userService.create(payload);

    request$.pipe(finalize(() => (this.loading = false))).subscribe({
      next: () => {
        this.notification.success(this.isEdit ? 'Usuario actualizado.' : 'Usuario creado.');
        this.dialogRef.close(true);
      },
    });
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
