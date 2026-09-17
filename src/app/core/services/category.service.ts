import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CategoryDTO } from '../models';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private readonly baseUrl = `${environment.apiUrl}/categories`;

  constructor(private readonly http: HttpClient) {}

  findAll(): Observable<CategoryDTO[]> {
    return this.http.get<CategoryDTO[]>(this.baseUrl);
  }

  findById(id: number): Observable<CategoryDTO> {
    return this.http.get<CategoryDTO>(`${this.baseUrl}/${id}`);
  }

  create(dto: CategoryDTO): Observable<CategoryDTO> {
    return this.http.post<CategoryDTO>(this.baseUrl, dto);
  }

  update(id: number, dto: CategoryDTO): Observable<CategoryDTO> {
    return this.http.put<CategoryDTO>(`${this.baseUrl}/${id}`, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
