import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(passwordKey: string, confirmKey: string): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const password = group.get(passwordKey)?.value;
    const confirm = group.get(confirmKey)?.value;
    const confirmControl = group.get(confirmKey);

    if (confirmControl?.errors && !confirmControl.errors['passwordMismatch']) {
      return null;
    }

    if (password !== confirm) {
      confirmControl?.setErrors({ ...confirmControl.errors, passwordMismatch: true });
      return { passwordMismatch: true };
    }

    if (confirmControl?.hasError('passwordMismatch')) {
      const { passwordMismatch, ...rest } = confirmControl.errors as Record<string, unknown>;
      confirmControl.setErrors(Object.keys(rest).length ? rest : null);
    }

    return null;
  };
}
