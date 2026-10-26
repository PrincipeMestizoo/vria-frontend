import { Component, DestroyRef, EventEmitter, Input, OnChanges, OnInit, Output, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ActivityNotification } from '../../../core/models';
import { PRODUCT_CHANGE_LABELS, notificationMeta } from '../../utils/notification-meta';

const MOBILE = '(max-width: 600px)';
const TWO_COLUMNS = '(max-width: 900px)';
const THREE_COLUMNS = '(max-width: 1200px)';
const DISMISS_KEY = 'vria_recent_changes_dismissed';

/**
 * Ventana con los ultimos cambios de productos. Al cerrarla se recuerda el cambio
 * mas reciente visto: vuelve a aparecer solo cuando llega uno nuevo.
 */
@Component({
  selector: 'app-recent-changes',
  templateUrl: './recent-changes.component.html',
  styleUrl: './recent-changes.component.scss',
})
export class RecentChangesComponent implements OnInit, OnChanges {
  private readonly destroyRef = inject(DestroyRef);
  private readonly breakpoints = inject(BreakpointObserver);
  @Input() changes: ActivityNotification[] = [];
  @Input() title = 'Novedades';
  @Output() selectChange = new EventEmitter<ActivityNotification>();

  readonly meta = notificationMeta;
  readonly labels = PRODUCT_CHANGE_LABELS;
  expanded = false;
  dismissed = false;
  isMobile = false;
  private columns = 4;

  ngOnInit(): void {
    this.breakpoints
      .observe([MOBILE, TWO_COLUMNS, THREE_COLUMNS])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ breakpoints }) => {
        this.isMobile = breakpoints[MOBILE];
        this.columns = breakpoints[TWO_COLUMNS] ? 2 : breakpoints[THREE_COLUMNS] ? 3 : 4;
      });
  }

  ngOnChanges(): void {
    const latest = this.changes[0]?.idNotification;
    this.dismissed = latest != null && readDismissed() >= latest;
  }

  get visible(): ActivityNotification[] {
    return this.expanded || this.isMobile ? this.changes : this.changes.slice(0, this.columns);
  }

  get hiddenCount(): number {
    return this.isMobile ? 0 : Math.max(0, this.changes.length - this.columns);
  }

  dismiss(): void {
    this.dismissed = true;
    writeDismissed(this.changes[0]?.idNotification ?? 0);
  }

  trackById(_: number, item: ActivityNotification): number {
    return item.idNotification;
  }
}

function readDismissed(): number {
  try {
    return Number(localStorage.getItem(DISMISS_KEY)) || 0;
  } catch {
    return 0;
  }
}

function writeDismissed(id: number): void {
  try {
    localStorage.setItem(DISMISS_KEY, String(id));
  } catch {
    // Sin almacenamiento disponible: el panel solo queda oculto en esta vista.
  }
}
