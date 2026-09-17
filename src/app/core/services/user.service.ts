import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserRequestDTO, UserResponseDTO } from '../models';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly baseUrl = `${environment.apiUrl}/users`;

  constructor(private readonly http: HttpClient) {}

  findAll(): Observable<UserResponseDTO[]> {
    return this.http.get<UserResponseDTO[]>(this.baseUrl);
  }

  findById(id: number): Observable<UserResponseDTO> {
    return this.http.get<UserResponseDTO>(`${this.baseUrl}/${id}`);
  }

  create(dto: UserRequestDTO): Observable<UserResponseDTO> {
    return this.http.post<UserResponseDTO>(this.baseUrl, dto);
  }

  update(id: number, dto: UserRequestDTO): Observable<UserResponseDTO> {
    return this.http.put<UserResponseDTO>(`${this.baseUrl}/${id}`, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
