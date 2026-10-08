import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';
import { ApiErrorResponse } from '../models';
import { SILENT_REQUEST } from './silent-request';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const notification = inject(NotificationService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const body = error.error as ApiErrorResponse | null;

      if (req.context.get(SILENT_REQUEST) && error.status !== 401) {
        return throwError(() => error);
      }

      if (error.status === 401) {
        // authInterceptor ya intento el refresh: la sesion no es recuperable
        if (req.url.includes('/auth/login')) {
          notification.error('Credenciales inválidas.');
        } else if (authService.isAuthenticated) {
          authService.clearSession();
          notification.error('Tu sesión expiró. Inicia sesión nuevamente.');
          router.navigate(['/auth/login']);
        }
      } else if (error.status === 403) {
        notification.error('No tienes permisos para realizar esta acción.');
      } else if (error.status === 0) {
        notification.error('No fue posible conectar con el servidor.');
      } else {
        notification.error(extractMessage(body));
      }

      return throwError(() => error);
    })
  );
};

function extractMessage(body: ApiErrorResponse | null): string {
  if (!body) {
    return 'Ocurrió un error inesperado.';
  }
  if (body.message) {
    return body.message;
  }
  if (body.errors) {
    const firstError = Object.values(body.errors)[0];
    if (firstError) {
      return firstError;
    }
  }
  return 'Ocurrió un error inesperado.';
}
