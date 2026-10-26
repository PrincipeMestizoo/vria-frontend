import { TypeRole } from './role.model';

export type NotificationModule = 'PRODUCT' | 'CATEGORY' | 'TRANSFER' | 'DELIVERY' | 'USER';

export type NotificationAction = 'CREATED' | 'UPDATED' | 'DELETED' | 'STOCK_REDUCED' | 'STATE_CHANGED';

// Evento registrado por el backend (historial de movimientos)
export interface ActivityNotification {
  idNotification: number;
  module: NotificationModule;
  action: NotificationAction;
  entityId: number | null;
  entityName: string | null;
  title: string;
  message: string;
  actorId: number | null;
  actorName: string;
  actorRole: TypeRole | null;
  createdAt: string;
  unread: boolean;
}

export interface NotificationPage {
  content: ActivityNotification[];
  page: number;
  size: number;
  totalElements: number;
  last: boolean;
}
