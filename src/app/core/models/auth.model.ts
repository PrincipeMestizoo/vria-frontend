import { TypeRole } from './role.model';

export interface LoginRequest {
  email: string;
  password: string;
}

// Los JWT viajan en cookies HttpOnly: el body solo trae los datos del usuario.
export interface AuthResponse {
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
