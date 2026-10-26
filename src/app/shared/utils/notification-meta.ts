import { ActivityNotification, NotificationAction, NotificationModule } from '../../core/models';

export type NotificationTone = 'info' | 'success' | 'warning' | 'danger' | 'accent';

export interface NotificationMeta {
  icon: string;
  tone: NotificationTone;
}

const ACTION_TONES: Record<NotificationAction, NotificationTone> = {
  CREATED: 'success',
  UPDATED: 'info',
  STATE_CHANGED: 'accent',
  STOCK_REDUCED: 'warning',
  DELETED: 'danger',
};

const MODULE_ICONS: Record<NotificationModule, string> = {
  PRODUCT: 'inventory_2',
  CATEGORY: 'category',
  TRANSFER: 'receipt_long',
  DELIVERY: 'local_shipping',
  USER: 'manage_accounts',
};

export const MODULE_LABELS: Record<NotificationModule, string> = {
  PRODUCT: 'Productos',
  CATEGORY: 'Categorías',
  TRANSFER: 'Transferencias',
  DELIVERY: 'Domicilios',
  USER: 'Usuarios',
};

// Ruta donde el usuario puede ver la entidad afectada
export const MODULE_ROUTES: Record<NotificationModule, string> = {
  PRODUCT: '/products',
  CATEGORY: '/categories',
  TRANSFER: '/transfers',
  DELIVERY: '/deliveries',
  USER: '/users',
};

export function notificationMeta(notification: ActivityNotification): NotificationMeta {
  const icon = notification.action === 'STOCK_REDUCED' ? 'outbox' : MODULE_ICONS[notification.module];
  return { icon, tone: ACTION_TONES[notification.action] };
}

// Etiqueta corta para resaltar un producto modificado recientemente
export const PRODUCT_CHANGE_LABELS: Partial<Record<NotificationAction, string>> = {
  CREATED: 'Nuevo',
  UPDATED: 'Actualizado',
  STOCK_REDUCED: 'Salida de stock',
  DELETED: 'Eliminado',
};

/** Ultimo cambio de cada producto aun existente (la lista viene ordenada del mas reciente al mas antiguo). */
export function latestChangeByProduct(changes: ActivityNotification[]): Map<number, ActivityNotification> {
  const latest = new Map<number, ActivityNotification>();
  const deleted = new Set<number>();
  for (const change of changes) {
    if (change.entityId == null || latest.has(change.entityId) || deleted.has(change.entityId)) {
      continue;
    }
    if (change.action === 'DELETED') {
      deleted.add(change.entityId);
    } else {
      latest.set(change.entityId, change);
    }
  }
  return latest;
}

/** Ubica primero los elementos modificados (del cambio mas reciente al mas antiguo) sin alterar el orden del resto. */
export function prioritizeChanged<T>(
  items: T[],
  idOf: (item: T) => number,
  changes: Map<number, ActivityNotification>
): T[] {
  const rank = new Map([...changes.keys()].map((id, index) => [id, index]));
  const changed = items.filter((item) => rank.has(idOf(item)));
  changed.sort((a, b) => rank.get(idOf(a))! - rank.get(idOf(b))!);
  return [...changed, ...items.filter((item) => !rank.has(idOf(item)))];
}
