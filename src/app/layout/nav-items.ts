import { TypeRole } from '../core/models';

export interface NavItem {
  label: string;
  icon: string;
  path: string;
  roles: TypeRole[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Panel principal',
    icon: 'space_dashboard',
    path: '/dashboard',
    roles: ['ADMIN', 'WAREHOUSE_KEEPER', 'COMMERCIAL_ADVISOR'],
  },
  {
    label: 'Productos',
    icon: 'inventory_2',
    path: '/products',
    roles: ['ADMIN', 'WAREHOUSE_KEEPER', 'COMMERCIAL_ADVISOR'],
  },
  {
    label: 'Categorías',
    icon: 'category',
    path: '/categories',
    roles: ['ADMIN', 'WAREHOUSE_KEEPER', 'COMMERCIAL_ADVISOR'],
  },
  {
    label: 'Tipos de categoría',
    icon: 'sell',
    path: '/type-categories',
    roles: ['ADMIN', 'WAREHOUSE_KEEPER', 'COMMERCIAL_ADVISOR'],
  },
  {
    label: 'Entregas',
    icon: 'local_shipping',
    path: '/deliveries',
    roles: ['ADMIN', 'WAREHOUSE_KEEPER', 'COMMERCIAL_ADVISOR'],
  },
  {
    label: 'Transferencias',
    icon: 'receipt_long',
    path: '/transfers',
    roles: ['ADMIN', 'COMMERCIAL_ADVISOR'],
  },
  {
    label: 'Usuarios',
    icon: 'manage_accounts',
    path: '/users',
    roles: ['ADMIN'],
  },
];
