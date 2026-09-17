import { TypeRole } from './role.model';

export interface UserResponseDTO {
  idUser: number;
  name: string;
  lastName: string;
  enabled: boolean;
  email: string;
  role: TypeRole;
}

export interface UserRequestDTO {
  name: string;
  lastName: string;
  enabled: boolean;
  email: string;
  password?: string | null;
  role: TypeRole;
}
