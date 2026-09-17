import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthResponse, CurrentUser, LoginRequest, TypeRole } from '../models';
import { TokenStorageService } from './token-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly baseUrl = `${environment.apiUrl}/auth`;
  private readonly currentUserSubject = new BehaviorSubject<CurrentUser | null>(
    this.tokenStorage.getCurrentUser()
  );
  readonly currentUser$ = this.currentUserSubject.asObservable();

  constructor(private readonly http: HttpClient, private readonly tokenStorage: TokenStorageService) {}

  login(request: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, request).pipe(
      tap((response) => this.persistSession(response))
    );
  }

  logout(): void {
    this.tokenStorage.clear();
    this.currentUserSubject.next(null);
  }

  get currentUser(): CurrentUser | null {
    return this.currentUserSubject.value;
  }

  get isAuthenticated(): boolean {
    return !!this.tokenStorage.getAccessToken();
  }

  hasAnyRole(roles: TypeRole[]): boolean {
    const user = this.currentUser;
    return !!user && roles.includes(user.role);
  }

  private persistSession(response: AuthResponse): void {
    this.tokenStorage.saveSession(response);
    this.currentUserSubject.next({
      idUser: response.idUser,
      name: response.name,
      email: response.email,
      role: response.role,
    });
  }
}
