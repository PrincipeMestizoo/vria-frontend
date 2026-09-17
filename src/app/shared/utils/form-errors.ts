import { AbstractControl } from '@angular/forms';

export function firstErrorMessage(control: AbstractControl | null, fieldLabel: string): string {
  if (!control || !control.errors) {
    return '';
  }

  const errors = control.errors;

  if (errors['required']) {
    return `${fieldLabel} es obligatorio.`;
  }
  if (errors['email']) {
    return 'El correo no tiene un formato válido.';
  }
  if (errors['minlength']) {
    return `${fieldLabel} debe tener al menos ${errors['minlength'].requiredLength} caracteres.`;
  }
  if (errors['min']) {
    return `${fieldLabel} debe ser mayor o igual a ${errors['min'].min}.`;
  }
  if (errors['passwordMismatch']) {
    return 'Las contraseñas no coinciden.';
  }

  return `${fieldLabel} no es válido.`;
}
