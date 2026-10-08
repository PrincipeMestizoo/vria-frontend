import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

interface CloudinaryUploadResponse {
  public_id: string;
  secure_url: string;
}

export const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024;
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

@Injectable({ providedIn: 'root' })
export class CloudinaryService {
  private readonly uploadUrl = `https://api.cloudinary.com/v1_1/${environment.cloudinary.cloudName}/image/upload`;
  // HttpClient sin interceptores: evita enviar el JWT de la API a Cloudinary
  private readonly http: HttpClient;

  constructor(httpBackend: HttpBackend) {
    this.http = new HttpClient(httpBackend);
  }

  /** Sube la imagen con el public_id indicado y retorna su URL segura. */
  uploadImage(file: File, publicId: string): Observable<string> {
    const body = new FormData();
    body.append('file', file);
    body.append('upload_preset', environment.cloudinary.uploadPreset);
    body.append('folder', environment.cloudinary.folder);
    body.append('public_id', publicId);

    return this.http
      .post<CloudinaryUploadResponse>(this.uploadUrl, body)
      .pipe(map((response) => response.secure_url));
  }
}
