import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TransferDTO } from '../models';

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

  create(dto: TransferDTO): Observable<TransferDTO> {
    return this.http.post<TransferDTO>(this.baseUrl, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
