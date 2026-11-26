export type ReceiptStatus = 'SUBIDO' | 'EXTRAIDO' | 'USADO';

export interface ReceiptDTO {
  receiptId: string;
  status: ReceiptStatus;
  uploadedAt: string;
}

export interface ReceiptDraftDTO {
  receiptId: string;
  status: ReceiptStatus;
  amount: number | null;
  currency: string | null;
  /** yyyy-MM-dd, sin hora */
  date: string | null;
  reference: string | null;
  bank: string | null;
  confidence: number | null;
  requiresReview: boolean;
  warnings: string[] | null;
}

export const RECEIPT_ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
export const RECEIPT_MAX_SIZE_BYTES = 8 * 1024 * 1024;
