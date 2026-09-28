import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { silentContext } from '../interceptors/silent-request';
import { ProductRequestDTO, ProductResponseDTO } from '../models';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly baseUrl = `${environment.apiUrl}/products`;

  constructor(private readonly http: HttpClient) {}

  findAll(options: { silent?: boolean } = {}): Observable<ProductResponseDTO[]> {
    return this.http.get<ProductResponseDTO[]>(this.baseUrl, {
      context: options.silent ? silentContext() : undefined,
    });
  }

  findById(id: number): Observable<ProductResponseDTO> {
    return this.http.get<ProductResponseDTO>(`${this.baseUrl}/${id}`);
  }

  findByCategory(idCategory: number): Observable<ProductResponseDTO[]> {
    return this.http.get<ProductResponseDTO[]>(`${this.baseUrl}/category/${idCategory}`);
  }

  create(dto: ProductRequestDTO): Observable<ProductResponseDTO> {
    return this.http.post<ProductResponseDTO>(this.baseUrl, dto);
  }

  update(id: number, dto: ProductRequestDTO): Observable<ProductResponseDTO> {
    return this.http.put<ProductResponseDTO>(`${this.baseUrl}/${id}`, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
