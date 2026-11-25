import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DeliveryDTO, DeliveryStateHistoryDTO, StateDelivery } from '../models';

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

  /** `reason` es obligatorio cuando el cambio es un retroceso (lo valida el backend). */
  updateState(id: number, state: StateDelivery, reason?: string | null): Observable<DeliveryDTO> {
    return this.http.patch<DeliveryDTO>(`${this.baseUrl}/${id}/state`, null, {
      params: reason ? { state, reason } : { state },
    });
  }

  /** El backend exige el motivo de la eliminación. */
  delete(id: number, reason: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, { params: { reason } });
  }

  /** Trazabilidad del domicilio. Solo para administradores o quien lo registró (si no, 403). */
  findHistory(id: number): Observable<DeliveryStateHistoryDTO[]> {
    return this.http.get<DeliveryStateHistoryDTO[]>(`${this.baseUrl}/${id}/history`);
  }
}
