import { Component, OnInit } from '@angular/core';
import { routeFade } from '../../shared/animations/animations';
import { ThemeService, AppTheme } from '../../core/services/theme.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss',
  animations: [routeFade],
})
export class AuthLayoutComponent implements OnInit {
  theme: AppTheme = 'light';

  constructor(private readonly themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.theme$.subscribe((theme) => (this.theme = theme));
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
