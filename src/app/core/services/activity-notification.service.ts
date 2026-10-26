import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { silentContext } from '../interceptors/silent-request';
import { ActivityNotification, NotificationModule, NotificationPage } from '../models';

const HOUR_MS = 60 * 60 * 1000;

/**
 * Historial de movimientos de la plataforma (no confundir con NotificationService,
 * que solo muestra snackbars). Todas las peticiones son silenciosas: se ejecutan
 * en segundo plano y no deben mostrar el overlay de carga.
 */
@Injectable({ providedIn: 'root' })
export class ActivityNotificationService {
  private readonly baseUrl = `${environment.apiUrl}/notifications`;
  private readonly unreadCountSubject = new BehaviorSubject<number>(0);
  readonly unreadCount$ = this.unreadCountSubject.asObservable();

  constructor(private readonly http: HttpClient) {}

  findPage(page = 0, size = 15, module?: NotificationModule): Observable<NotificationPage> {
    const params: Record<string, string | number> = { page, size };
    if (module) {
      params['module'] = module;
    }
    return this.http.get<NotificationPage>(this.baseUrl, { params, context: silentContext() });
  }

  refreshUnreadCount(): Observable<number> {
    return this.http
      .get<{ unread: number }>(`${this.baseUrl}/unread-count`, { context: silentContext() })
      .pipe(
        map((response) => response.unread),
        tap((count) => this.unreadCountSubject.next(count))
      );
  }

  markAllAsRead(): Observable<void> {
    return this.http
      .patch<void>(`${this.baseUrl}/read-all`, null, { context: silentContext() })
      .pipe(tap(() => this.unreadCountSubject.next(0)));
  }

  /** Cambios de productos ocurridos en las ultimas `hours` horas, del mas reciente al mas antiguo. */
  recentProductChanges(hours = 24): Observable<ActivityNotification[]> {
    const since = Date.now() - hours * HOUR_MS;
    return this.findPage(0, 50, 'PRODUCT').pipe(
      map((page) => page.content.filter((n) => new Date(n.createdAt).getTime() >= since))
    );
  }

  resetUnreadCount(): void {
    this.unreadCountSubject.next(0);
  }
}
