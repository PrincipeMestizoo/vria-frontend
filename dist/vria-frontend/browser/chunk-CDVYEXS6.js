import {
  BehaviorSubject,
  HttpClient,
  environment,
  map,
  silentContext,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IREKQD7O.js";

// src/app/core/services/activity-notification.service.ts
var HOUR_MS = 60 * 60 * 1e3;
var ActivityNotificationService = class _ActivityNotificationService {
  constructor(http) {
    this.http = http;
    this.baseUrl = `${environment.apiUrl}/notifications`;
    this.unreadCountSubject = new BehaviorSubject(0);
    this.unreadCount$ = this.unreadCountSubject.asObservable();
  }
  findPage(page = 0, size = 15, module) {
    const params = { page, size };
    if (module) {
      params["module"] = module;
    }
    return this.http.get(this.baseUrl, { params, context: silentContext() });
  }
  refreshUnreadCount() {
    return this.http.get(`${this.baseUrl}/unread-count`, { context: silentContext() }).pipe(map((response) => response.unread), tap((count) => this.unreadCountSubject.next(count)));
  }
  markAllAsRead() {
    return this.http.patch(`${this.baseUrl}/read-all`, null, { context: silentContext() }).pipe(tap(() => this.unreadCountSubject.next(0)));
  }
  /** Cambios de productos ocurridos en las ultimas `hours` horas, del mas reciente al mas antiguo. */
  recentProductChanges(hours = 24) {
    const since = Date.now() - hours * HOUR_MS;
    return this.findPage(0, 50, "PRODUCT").pipe(map((page) => page.content.filter((n) => new Date(n.createdAt).getTime() >= since)));
  }
  resetUnreadCount() {
    this.unreadCountSubject.next(0);
  }
  static {
    this.\u0275fac = function ActivityNotificationService_Factory(t) {
      return new (t || _ActivityNotificationService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ActivityNotificationService, factory: _ActivityNotificationService.\u0275fac, providedIn: "root" });
  }
};

export {
  ActivityNotificationService
};
//# sourceMappingURL=chunk-CDVYEXS6.js.map
