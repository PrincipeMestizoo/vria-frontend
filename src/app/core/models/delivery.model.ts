import { PayMode } from './transfer.model';

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
}
