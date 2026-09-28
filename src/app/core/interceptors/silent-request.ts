import { HttpContext, HttpContextToken } from '@angular/common/http';

// Peticiones en segundo plano: sin overlay de carga ni notificaciones de error.
export const SILENT_REQUEST = new HttpContextToken<boolean>(() => false);

export function silentContext(): HttpContext {
  return new HttpContext().set(SILENT_REQUEST, true);
}
