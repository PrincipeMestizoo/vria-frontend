import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { silentContext } from '../interceptors/silent-request';
import { ProductRequestDTO, ProductResponseDTO } from '../models';

// Texto mostrado cuando el producto quedo sin categoria (categoria eliminada)
export const NO_CATEGORY_LABEL = 'Categoria no aceptada';

function withCategoryLabel(product: ProductResponseDTO): ProductResponseDTO {
  return product.nameCategory ? product : { ...product, nameCategory: NO_CATEGORY_LABEL };
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly baseUrl = `${environment.apiUrl}/products`;

  constructor(private readonly http: HttpClient) {}

  findAll(options: { silent?: boolean } = {}): Observable<ProductResponseDTO[]> {
    return this.http
      .get<ProductResponseDTO[]>(this.baseUrl, {
        context: options.silent ? silentContext() : undefined,
      })
      .pipe(map((products) => products.map(withCategoryLabel)));
  }

  findById(id: number): Observable<ProductResponseDTO> {
    return this.http.get<ProductResponseDTO>(`${this.baseUrl}/${id}`).pipe(map(withCategoryLabel));
  }

  findByCategory(idCategory: number): Observable<ProductResponseDTO[]> {
    return this.http
      .get<ProductResponseDTO[]>(`${this.baseUrl}/category/${idCategory}`)
      .pipe(map((products) => products.map(withCategoryLabel)));
  }

  create(dto: ProductRequestDTO): Observable<ProductResponseDTO> {
    return this.http.post<ProductResponseDTO>(this.baseUrl, dto).pipe(map(withCategoryLabel));
  }

  update(id: number, dto: ProductRequestDTO): Observable<ProductResponseDTO> {
    return this.http.put<ProductResponseDTO>(`${this.baseUrl}/${id}`, dto).pipe(map(withCategoryLabel));
  }

  reduceStock(id: number, quantity: number): Observable<ProductResponseDTO> {
    return this.http
      .patch<ProductResponseDTO>(`${this.baseUrl}/${id}/reduce`, null, { params: { quantity } })
      .pipe(map(withCategoryLabel));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
