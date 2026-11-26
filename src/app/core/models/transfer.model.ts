export type PayMode = 'TRANSFER' | 'CASH';

export const PAY_MODES: PayMode[] = ['TRANSFER', 'CASH'];

export const PAY_MODE_LABELS: Record<PayMode, string> = {
  TRANSFER: 'Transferencia',
  CASH: 'Efectivo',
};

export interface TransferDTO {
  idTransfer: number | null;
  amount: number;
  destination: string;
  dateTransfer: string;
  nameClient: string;
  bank: string;
  reference: string | null;
  currency: string | null;
  receiptId?: string | null;
  // Solo lectura: los asigna el servidor
  status?: TransferStatus;
  nameUser?: string | null;
}

export type TransferStatus = 'PENDIENTE_CONCILIACION' | 'RECIBIDO' | 'RECHAZADO';

export const TRANSFER_STATUSES: TransferStatus[] = ['PENDIENTE_CONCILIACION', 'RECIBIDO', 'RECHAZADO'];

export const TRANSFER_STATUS_LABELS: Record<TransferStatus, string> = {
  PENDIENTE_CONCILIACION: 'Pendiente de conciliación',
  RECIBIDO: 'Recibido',
  RECHAZADO: 'Rechazado',
};
