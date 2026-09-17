export type TypeRole = 'ADMIN' | 'WAREHOUSE_KEEPER' | 'COMMERCIAL_ADVISOR';

export const ROLE_LABELS: Record<TypeRole, string> = {
  ADMIN: 'Administrador',
  WAREHOUSE_KEEPER: 'Encargado de bodega',
  COMMERCIAL_ADVISOR: 'Asesor comercial',
};

export const ALL_ROLES: TypeRole[] = ['ADMIN', 'WAREHOUSE_KEEPER', 'COMMERCIAL_ADVISOR'];
