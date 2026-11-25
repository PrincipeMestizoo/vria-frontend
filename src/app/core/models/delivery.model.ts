import { PayMode } from './transfer.model';
import { TypeRole } from './role.model';

export type StateDelivery = 'PREPARING' | 'READY' | 'SHIPPED' | 'DELIVERED';

export const DELIVERY_STATES: StateDelivery[] = ['PREPARING', 'READY', 'SHIPPED', 'DELIVERED'];

export const DELIVERY_STATE_LABELS: Record<StateDelivery, string> = {
  PREPARING: 'En preparación',
  READY: 'Lista',
  SHIPPED: 'Enviada',
  DELIVERED: 'Entregada',
};

export interface DeliveryDTO {
  idDelivery: number | null;
  nameClient: string;
  nameDelivery: string;
  address: string;
  payMode: PayMode;
  dateDelivery: string;
  state: StateDelivery;
  
  // Solo lectura
  idUser?: number | null;
  nameUser?: string | null;
  roleUser?: TypeRole | null;
}

export type DeliveryTraceAction = 'CREATED' | 'ADVANCED' | 'REVERTED' | 'DELETED';

export const DELIVERY_TRACE_ACTION_LABELS: Record<DeliveryTraceAction, string> = {
  CREATED: 'Registrado',
  ADVANCED: 'Avanzó',
  REVERTED: 'Retrocedió',
  DELETED: 'Eliminado',
};

/** Movimiento de la trazabilidad de un domicilio (solo lectura). */
export interface DeliveryStateHistoryDTO {
  idHistory: number;
  idDelivery: number;
  nameClient: string;
  action: DeliveryTraceAction;
  fromState: StateDelivery | null;
  toState: StateDelivery | null;
  reason: string | null;
  actorId: number;
  actorName: string;
  actorRole: TypeRole;
  changedAt: string;
}
