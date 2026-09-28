export type StockLevel = 'OK' | 'LOW' | 'CRITICAL';

// Umbrales internos del semaforo: no se muestran en la interfaz.
const CRITICAL_MAX = 5;
const LOW_MAX = 15;

export const STOCK_LEVELS: StockLevel[] = ['CRITICAL', 'LOW', 'OK'];

export const STOCK_LEVEL_LABELS: Record<StockLevel, string> = {
  OK: 'Disponible',
  LOW: 'Stock bajo',
  CRITICAL: 'Crítico',
};

export function getStockLevel(stock: number): StockLevel {
  if (stock <= CRITICAL_MAX) {
    return 'CRITICAL';
  }
  if (stock <= LOW_MAX) {
    return 'LOW';
  }
  return 'OK';
}
