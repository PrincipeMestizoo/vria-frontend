import { Injectable } from '@angular/core';
import { AuthResponse, CurrentUser } from '../models';

const ACCESS_TOKEN_KEY = 'vria_access_token';
const REFRESH_TOKEN_KEY = 'vria_refresh_token';
const USER_KEY = 'vria_user';

@Injectable({ providedIn: 'root' })
export class TokenStorageService {
  saveSession(auth: AuthResponse): void {
    localStorage.setItem(ACCESS_TOKEN_KEY, auth.accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, auth.refreshToken);
    const user: CurrentUser = {
      idUser: auth.idUser,
      name: auth.name,
      email: auth.email,
      role: auth.role,
    };
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  getAccessToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }

  getCurrentUser(): CurrentUser | null {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? (JSON.parse(raw) as CurrentUser) : null;
  }

  clear(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }
}
