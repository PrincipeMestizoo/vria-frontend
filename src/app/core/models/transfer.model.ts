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
}
