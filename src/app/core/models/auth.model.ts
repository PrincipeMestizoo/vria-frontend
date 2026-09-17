import { TypeRole } from './role.model';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  idUser: number;
  name: string;
  email: string;
  role: TypeRole;
}

export interface CurrentUser {
  idUser: number;
  name: string;
  email: string;
  role: TypeRole;
}
