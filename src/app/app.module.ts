import { registerLocaleData } from '@angular/common';
import localeEsCo from '@angular/common/locales/es-CO';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

import { authInterceptor } from './core/interceptors/auth.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { AuthService } from './core/services/auth.service';

// Recupera la sesion (cookies HttpOnly) antes de que los guards evaluen la primera ruta.
function initSession(authService: AuthService) {
  return () => authService.loadSession();
}

registerLocaleData(localeEsCo);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  providers: [
    // authInterceptor va al final para que el refresh/reintento ocurra antes de que errorInterceptor vea el 401
    provideHttpClient(withInterceptors([loadingInterceptor, errorInterceptor, authInterceptor])),
    { provide: APP_INITIALIZER, useFactory: initSession, deps: [AuthService], multi: true },
    { provide: LOCALE_ID, useValue: 'es-CO' },
    { provide: MAT_DATE_LOCALE, useValue: 'es-CO' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
