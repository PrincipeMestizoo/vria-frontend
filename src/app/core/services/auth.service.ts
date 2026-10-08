import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, finalize, map, of, shareReplay, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthResponse, CurrentUser, LoginRequest, TypeRole } from '../models';
import { silentContext } from '../interceptors/silent-request';

// Claves que usaba la version anterior (tokens en localStorage); se limpian al iniciar.
const LEGACY_STORAGE_KEYS = ['vria_access_token', 'vria_refresh_token', 'vria_user'];

/**
 * Sesion basada en cookies HttpOnly (access_token / refresh_token) emitidas por el backend.
 * El frontend no puede leer los tokens: solo guarda en memoria el usuario autenticado
 * y lo recupera con /auth/me al recargar la pagina.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly baseUrl = `${environment.apiUrl}/auth`;
  private readonly currentUserSubject = new BehaviorSubject<CurrentUser | null>(null);
  readonly currentUser$ = this.currentUserSubject.asObservable();

  private refreshInFlight$: Observable<void> | null = null;

  constructor(private readonly http: HttpClient) {
    clearLegacyStorage();
  }

  login(request: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, request).pipe(
      tap((response) => this.setUser(response))
    );
  }

  /** Recupera la sesion actual a partir de las cookies (usado al arrancar la app). */
  loadSession(): Observable<CurrentUser | null> {
    return this.http.get<AuthResponse>(`${this.baseUrl}/me`, { context: silentContext() }).pipe(
      map((response) => this.setUser(response)),
      catchError(() => {
        this.clearSession();
        return of(null);
      })
    );
  }

  /**
   * Pide al backend un nuevo par de tokens usando la cookie refresh_token.
   * Peticiones concurrentes que reciben 401 comparten la misma llamada.
   */
  refresh(): Observable<void> {
    if (!this.refreshInFlight$) {
      this.refreshInFlight$ = this.http
        .post<AuthResponse>(`${this.baseUrl}/refresh`, null, { context: silentContext() })
        .pipe(
          tap((response) => this.setUser(response)),
          map(() => undefined),
          finalize(() => (this.refreshInFlight$ = null)),
          shareReplay(1)
        );
    }
    return this.refreshInFlight$;
  }

  /** Cierra la sesion en el backend (borra las cookies) y limpia el estado local. */
  logout(): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/logout`, null, { context: silentContext() }).pipe(
      catchError(() => of(undefined)),
      finalize(() => this.clearSession())
    );
  }

  /** Limpia solo el estado local (las cookies ya son invalidas o expiraron). */
  clearSession(): void {
    this.currentUserSubject.next(null);
  }

  get currentUser(): CurrentUser | null {
    return this.currentUserSubject.value;
  }

  get isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }

  hasAnyRole(roles: TypeRole[]): boolean {
    const user = this.currentUser;
    return !!user && roles.includes(user.role);
  }

  private setUser(response: AuthResponse): CurrentUser {
    const user: CurrentUser = {
      idUser: response.idUser,
      name: response.name,
      email: response.email,
      role: response.role,
    };
    this.currentUserSubject.next(user);
    return user;
  }
}

function clearLegacyStorage(): void {
  try {
    LEGACY_STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
  } catch {
    // localStorage no disponible; no hay nada que limpiar.
  }
}
