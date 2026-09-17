import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TypeCategoryDTO } from '../models';

@Injectable({ providedIn: 'root' })
export class TypeCategoryService {
  private readonly baseUrl = `${environment.apiUrl}/type-categories`;

  constructor(private readonly http: HttpClient) {}

  findAll(): Observable<TypeCategoryDTO[]> {
    return this.http.get<TypeCategoryDTO[]>(this.baseUrl);
  }

  findById(id: number): Observable<TypeCategoryDTO> {
    return this.http.get<TypeCategoryDTO>(`${this.baseUrl}/${id}`);
  }

  create(dto: TypeCategoryDTO): Observable<TypeCategoryDTO> {
    return this.http.post<TypeCategoryDTO>(this.baseUrl, dto);
  }

  update(id: number, dto: TypeCategoryDTO): Observable<TypeCategoryDTO> {
    return this.http.put<TypeCategoryDTO>(`${this.baseUrl}/${id}`, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
