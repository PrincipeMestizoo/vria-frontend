import {
  BehaviorSubject,
  HttpClient,
  catchError,
  environment,
  finalize,
  map,
  of,
  shareReplay,
  silentContext,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IREKQD7O.js";

// src/app/core/services/auth.service.ts
var LEGACY_STORAGE_KEYS = ["vria_access_token", "vria_refresh_token", "vria_user"];
var AuthService = class _AuthService {
  constructor(http) {
    this.http = http;
    this.baseUrl = `${environment.apiUrl}/auth`;
    this.currentUserSubject = new BehaviorSubject(null);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.refreshInFlight$ = null;
    clearLegacyStorage();
  }
  login(request) {
    return this.http.post(`${this.baseUrl}/login`, request).pipe(tap((response) => this.setUser(response)));
  }
  /** Recupera la sesion actual a partir de las cookies (usado al arrancar la app). */
  loadSession() {
    return this.http.get(`${this.baseUrl}/me`, { context: silentContext() }).pipe(map((response) => this.setUser(response)), catchError(() => {
      this.clearSession();
      return of(null);
    }));
  }
  /**
   * Pide al backend un nuevo par de tokens usando la cookie refresh_token.
   * Peticiones concurrentes que reciben 401 comparten la misma llamada.
   */
  refresh() {
    if (!this.refreshInFlight$) {
      this.refreshInFlight$ = this.http.post(`${this.baseUrl}/refresh`, null, { context: silentContext() }).pipe(tap((response) => this.setUser(response)), map(() => void 0), finalize(() => this.refreshInFlight$ = null), shareReplay(1));
    }
    return this.refreshInFlight$;
  }
  /** Cierra la sesion en el backend (borra las cookies) y limpia el estado local. */
  logout() {
    return this.http.post(`${this.baseUrl}/logout`, null, { context: silentContext() }).pipe(catchError(() => of(void 0)), finalize(() => this.clearSession()));
  }
  /** Limpia solo el estado local (las cookies ya son invalidas o expiraron). */
  clearSession() {
    this.currentUserSubject.next(null);
  }
  get currentUser() {
    return this.currentUserSubject.value;
  }
  get isAuthenticated() {
    return !!this.currentUserSubject.value;
  }
  hasAnyRole(roles) {
    const user = this.currentUser;
    return !!user && roles.includes(user.role);
  }
  setUser(response) {
    const user = {
      idUser: response.idUser,
      name: response.name,
      email: response.email,
      role: response.role
    };
    this.currentUserSubject.next(user);
    return user;
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};
function clearLegacyStorage() {
  try {
    LEGACY_STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
  } catch {
  }
}

export {
  AuthService
};
//# sourceMappingURL=chunk-3P32XUOT.js.map
