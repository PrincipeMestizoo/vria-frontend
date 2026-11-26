import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { silentContext } from '../interceptors/silent-request';
import { ReceiptDTO, ReceiptDraftDTO } from '../models';

// Silenciosas: el progreso y los errores se muestran dentro del formulario
@Injectable({ providedIn: 'root' })
export class ReceiptService {
  private readonly baseUrl = `${environment.apiUrl}/receipts`;

  constructor(private readonly http: HttpClient) {}

  upload(file: File): Observable<ReceiptDTO> {
    const body = new FormData();
    body.append('file', file);
    return this.http.post<ReceiptDTO>(this.baseUrl, body, { context: silentContext() });
  }

  extract(receiptId: string): Observable<ReceiptDraftDTO> {
    return this.http.post<ReceiptDraftDTO>(`${this.baseUrl}/${receiptId}/extract`, null, {
      context: silentContext(),
    });
  }
}
