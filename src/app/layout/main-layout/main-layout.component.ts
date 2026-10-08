import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { ThemeService, AppTheme } from '../../core/services/theme.service';
import { CurrentUser } from '../../core/models';
import { NAV_ITEMS, NavItem } from '../nav-items';
import { routeFade } from '../../shared/animations/animations';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  animations: [routeFade],
})
export class MainLayoutComponent implements OnInit {
  currentUser: CurrentUser | null = null;
  navItems: NavItem[] = [];
  isHandset = false;
  theme: AppTheme = 'light';

  readonly isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay(1)
  );

  constructor(
    private readonly authService: AuthService,
    private readonly themeService: ThemeService,
    readonly router: Router,
    private readonly breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
      this.navItems = NAV_ITEMS.filter((item) => !user || item.roles.includes(user.role));
    });

    this.isHandset$.subscribe((matches) => (this.isHandset = matches));
    this.themeService.theme$.subscribe((theme) => (this.theme = theme));
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  logout(): void {
    this.authService.logout().subscribe(() => this.router.navigate(['/auth/login']));
  }
}
