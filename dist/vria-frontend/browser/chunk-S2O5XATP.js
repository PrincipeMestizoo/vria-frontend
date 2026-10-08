import {
  BehaviorSubject,
  HttpClient,
  environment,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UK26UTD3.js";

// src/app/core/services/token-storage.service.ts
var ACCESS_TOKEN_KEY = "vria_access_token";
var REFRESH_TOKEN_KEY = "vria_refresh_token";
var USER_KEY = "vria_user";
var TokenStorageService = class _TokenStorageService {
  saveSession(auth) {
    localStorage.setItem(ACCESS_TOKEN_KEY, auth.accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, auth.refreshToken);
    const user = {
      idUser: auth.idUser,
      name: auth.name,
      email: auth.email,
      role: auth.role
    };
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }
  getCurrentUser() {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  }
  clear() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }
  static {
    this.\u0275fac = function TokenStorageService_Factory(t) {
      return new (t || _TokenStorageService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TokenStorageService, factory: _TokenStorageService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
    this.baseUrl = `${environment.apiUrl}/auth`;
    this.currentUserSubject = new BehaviorSubject(this.tokenStorage.getCurrentUser());
    this.currentUser$ = this.currentUserSubject.asObservable();
  }
  login(request) {
    return this.http.post(`${this.baseUrl}/login`, request).pipe(tap((response) => this.persistSession(response)));
  }
  logout() {
    this.tokenStorage.clear();
    this.currentUserSubject.next(null);
  }
  get currentUser() {
    return this.currentUserSubject.value;
  }
  get isAuthenticated() {
    return !!this.tokenStorage.getAccessToken();
  }
  hasAnyRole(roles) {
    const user = this.currentUser;
    return !!user && roles.includes(user.role);
  }
  persistSession(response) {
    this.tokenStorage.saveSession(response);
    this.currentUserSubject.next({
      idUser: response.idUser,
      name: response.name,
      email: response.email,
      role: response.role
    });
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(TokenStorageService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  TokenStorageService,
  AuthService
};
//# sourceMappingURL=chunk-S2O5XATP.js.map
