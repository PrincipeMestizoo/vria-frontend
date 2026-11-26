import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TransferDTO, TransferStatus } from '../models';

@Injectable({ providedIn: 'root' })
export class TransferService {
  private readonly baseUrl = `${environment.apiUrl}/transfers`;

  constructor(private readonly http: HttpClient) {}

  findAll(): Observable<TransferDTO[]> {
    return this.http.get<TransferDTO[]>(this.baseUrl);
  }

  findById(id: number): Observable<TransferDTO> {
    return this.http.get<TransferDTO>(`${this.baseUrl}/${id}`);
  }

  create(dto: TransferDTO, idempotencyKey: string): Observable<TransferDTO> {
    return this.http.post<TransferDTO>(this.baseUrl, dto, {
      headers: { 'Idempotency-Key': idempotencyKey },
    });
  }

  updateStatus(id: number, status: TransferStatus): Observable<TransferDTO> {
    return this.http.patch<TransferDTO>(`${this.baseUrl}/${id}/status`, { status });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
