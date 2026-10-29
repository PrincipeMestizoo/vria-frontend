// src/app/shared/utils/form-errors.ts
function firstErrorMessage(control, fieldLabel) {
  if (!control || !control.errors) {
    return "";
  }
  const errors = control.errors;
  if (errors["required"]) {
    return `${fieldLabel} es obligatorio.`;
  }
  if (errors["email"]) {
    return "El correo no tiene un formato v\xE1lido.";
  }
  if (errors["minlength"]) {
    return `${fieldLabel} debe tener al menos ${errors["minlength"].requiredLength} caracteres.`;
  }
  if (errors["min"]) {
    return `${fieldLabel} debe ser mayor o igual a ${errors["min"].min}.`;
  }
  if (errors["passwordMismatch"]) {
    return "Las contrase\xF1as no coinciden.";
  }
  return `${fieldLabel} no es v\xE1lido.`;
}

export {
  firstErrorMessage
};
//# sourceMappingURL=chunk-5N3PECVO.js.map
