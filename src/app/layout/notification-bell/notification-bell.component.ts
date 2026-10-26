import { Component, DestroyRef, OnInit, ViewChild, inject } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { EMPTY, catchError, finalize, of, switchMap, timer } from 'rxjs';
import { ActivityNotificationService } from '../../core/services/activity-notification.service';
import { AuthService } from '../../core/services/auth.service';
import { ActivityNotification } from '../../core/models';
import { MODULE_LABELS, MODULE_ROUTES, notificationMeta } from '../../shared/utils/notification-meta';

const POLL_INTERVAL_MS = 30_000;
const PAGE_SIZE = 15;

type FeedFilter = 'ALL' | 'UNREAD';

@Component({
  selector: 'app-notification-bell',
  templateUrl: './notification-bell.component.html',
  styleUrl: './notification-bell.component.scss',
})
export class NotificationBellComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  @ViewChild(MatMenuTrigger) private trigger?: MatMenuTrigger;

  readonly meta = notificationMeta;
  readonly moduleLabels = MODULE_LABELS;
  unreadCount = 0;
  items: ActivityNotification[] = [];
  filter: FeedFilter = 'ALL';
  loading = false;
  loadingMore = false;
  failed = false;
  private page = 0;
  private last = true;

  constructor(
    private readonly activityService: ActivityNotificationService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.activityService.unreadCount$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((count) => (this.unreadCount = count));

    // Consulta periodica del contador mientras haya sesion activa
    this.authService.currentUser$
      .pipe(
        switchMap((user) => {
          if (!user) {
            this.activityService.resetUnreadCount();
            return EMPTY;
          }
          return timer(0, POLL_INTERVAL_MS).pipe(
            switchMap(() => this.activityService.refreshUnreadCount().pipe(catchError(() => of(0))))
          );
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  get badgeLabel(): string {
    return this.unreadCount > 99 ? '99+' : String(this.unreadCount);
  }

  get visibleItems(): ActivityNotification[] {
    return this.filter === 'UNREAD' ? this.items.filter((n) => n.unread) : this.items;
  }

  get hasUnreadItems(): boolean {
    return this.items.some((n) => n.unread);
  }

  get canLoadMore(): boolean {
    return !this.last && !this.loading;
  }

  onOpened(): void {
    this.filter = 'ALL';
    this.load(0);
  }

  // Las notificaciones se marcan como leidas al cerrar el panel: asi el usuario
  // alcanza a distinguir cuales eran nuevas mientras lo revisa.
  onClosed(): void {
    if (this.unreadCount > 0 || this.hasUnreadItems) {
      this.activityService.markAllAsRead().subscribe({ error: () => undefined });
    }
  }

  markAllAsRead(): void {
    this.activityService.markAllAsRead().subscribe(() => {
      this.items = this.items.map((n) => ({ ...n, unread: false }));
    });
  }

  loadMore(): void {
    this.load(this.page + 1);
  }

  retry(): void {
    this.load(0);
  }

  open(notification: ActivityNotification): void {
    this.trigger?.closeMenu();
    this.router.navigateByUrl(MODULE_ROUTES[notification.module]);
  }

  trackById(_: number, item: ActivityNotification): number {
    return item.idNotification;
  }

  private load(page: number): void {
    const first = page === 0;
    first ? (this.loading = true) : (this.loadingMore = true);
    this.failed = false;

    this.activityService
      .findPage(page, PAGE_SIZE)
      .pipe(finalize(() => (first ? (this.loading = false) : (this.loadingMore = false))))
      .subscribe({
        next: (result) => {
          this.items = first ? result.content : [...this.items, ...result.content];
          this.page = result.page;
          this.last = result.last;
        },
        error: () => (this.failed = true),
      });
  }
}
