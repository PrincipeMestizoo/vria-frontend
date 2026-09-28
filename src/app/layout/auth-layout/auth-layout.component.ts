import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { routeFade } from '../../shared/animations/animations';
import { ThemeService, AppTheme } from '../../core/services/theme.service';

const SPLASH_DURATION_MS = 1500;

const splashLeave = trigger('splashLeave', [
  transition(':leave', [
    animate(
      '550ms cubic-bezier(0.4, 0, 0.2, 1)',
      style({ opacity: 0, transform: 'scale(1.08)', filter: 'blur(8px)' })
    ),
  ]),
]);

const shellEnter = trigger('shellEnter', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.98)' }),
    animate('600ms 120ms cubic-bezier(0.22, 1, 0.36, 1)', style({ opacity: 1, transform: 'scale(1)' })),
  ]),
]);

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss',
  animations: [routeFade, splashLeave, shellEnter],
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  theme: AppTheme = 'light';
  showSplash = true;

  private splashTimer?: ReturnType<typeof setTimeout>;

  constructor(private readonly themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.theme$.subscribe((theme) => (this.theme = theme));
    this.splashTimer = setTimeout(() => (this.showSplash = false), SPLASH_DURATION_MS);
  }

  ngOnDestroy(): void {
    clearTimeout(this.splashTimer);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
