import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DeliveryDTO, StateDelivery } from '../models';

@Injectable({ providedIn: 'root' })
export class DeliveryService {
  private readonly baseUrl = `${environment.apiUrl}/deliveries`;

  constructor(private readonly http: HttpClient) {}

  findAll(): Observable<DeliveryDTO[]> {
    return this.http.get<DeliveryDTO[]>(this.baseUrl);
  }

  findById(id: number): Observable<DeliveryDTO> {
    return this.http.get<DeliveryDTO>(`${this.baseUrl}/${id}`);
  }

  findByState(state: StateDelivery): Observable<DeliveryDTO[]> {
    return this.http.get<DeliveryDTO[]>(`${this.baseUrl}/state/${state}`);
  }

  create(dto: DeliveryDTO): Observable<DeliveryDTO> {
    return this.http.post<DeliveryDTO>(this.baseUrl, dto);
  }

  updateState(id: number, state: StateDelivery): Observable<DeliveryDTO> {
    return this.http.patch<DeliveryDTO>(`${this.baseUrl}/${id}/state`, null, {
      params: { state },
    });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
