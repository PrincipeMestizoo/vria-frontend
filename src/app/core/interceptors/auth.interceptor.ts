import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from '../services/auth.service';

// Endpoints de auth que nunca deben disparar un refresh (evita bucles).
const NO_REFRESH_ENDPOINTS = ['/auth/login', '/auth/register', '/auth/refresh', '/auth/logout'];

/**
 * Los JWT viajan en cookies HttpOnly: basta con enviar las peticiones a la API con
 * withCredentials. Si el access token expiro (401), se intenta un refresh una sola vez
 * y se reintenta la peticion original.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.startsWith(environment.apiUrl)) {
    return next(req);
  }

  const authService = inject(AuthService);
  const apiReq = req.clone({ withCredentials: true });

  if (NO_REFRESH_ENDPOINTS.some((endpoint) => req.url.includes(endpoint))) {
    return next(apiReq);
  }

  return next(apiReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status !== 401) {
        return throwError(() => error);
      }
      return authService.refresh().pipe(
        // Si el refresh falla se propaga el 401 original para que errorInterceptor cierre la sesion
        catchError(() => throwError(() => error)),
        switchMap(() => next(apiReq))
      );
    })
  );
};
