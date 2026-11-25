import { CurrentUser, DELIVERY_STATES, DeliveryDTO, StateDelivery } from '../../../core/models';

/**
 * Reglas de negocio del flujo de domicilios.
 *
 * Flujo lineal: PREPARING → READY → SHIPPED → DELIVERED
 *  - Solo se avanza un paso a la vez (no se puede saltar etapas, para conservar la trazabilidad).
 *  - Se permite retroceder un paso como corrección (p. ej. un pedido enviado que regresa a bodega),
 *    excepto desde DELIVERED: una entrega confirmada es terminal e inmutable.
 *  - Solo pueden eliminarse domicilios que aún no han salido (PREPARING / READY).
 *  - Retroceder o eliminar exige un motivo, que queda en la trazabilidad.
 *  - El historial solo lo ven administradores y el usuario que registró el domicilio.
 *
 * Espejo de `SequentialDeliveryWorkflowPolicy` y `CreatorOrAdminHistoryAccessPolicy` en vria-backend.
 */

export type TransitionKind = 'forward' | 'backward';

export interface DeliveryTransition {
  from: StateDelivery;
  to: StateDelivery;
  kind: TransitionKind;
  /** Texto del botón de acción en la tarjeta. */
  actionLabel: string;
  icon: string;
  /** Requiere confirmación explícita del usuario antes de aplicarse. */
  requiresConfirmation: boolean;
  /** Requiere justificar el motivo (queda en la trazabilidad). */
  requiresReason: boolean;
}

export interface DeliveryColumnMeta {
  state: StateDelivery;
  title: string;
  hint: string;
  icon: string;
  /** Sufijo de la variable CSS de color (--vria-<tone>). */
  tone: 'info' | 'warning' | 'purple' | 'success';
}

export const DELIVERY_COLUMNS: DeliveryColumnMeta[] = [
  { state: 'PREPARING', title: 'En preparación', hint: 'Alistando el pedido', icon: 'inventory_2', tone: 'warning' },
  { state: 'READY', title: 'Lista', hint: 'Esperando repartidor', icon: 'task_alt', tone: 'info' },
  { state: 'SHIPPED', title: 'Enviada', hint: 'En ruta al cliente', icon: 'local_shipping', tone: 'purple' },
  { state: 'DELIVERED', title: 'Entregada', hint: 'Confirmada por el cliente', icon: 'verified', tone: 'success' },
];

const TRANSITIONS: DeliveryTransition[] = [
  { from: 'PREPARING', to: 'READY', kind: 'forward', actionLabel: 'Marcar lista', icon: 'task_alt', requiresConfirmation: false, requiresReason: false },
  { from: 'READY', to: 'SHIPPED', kind: 'forward', actionLabel: 'Despachar', icon: 'local_shipping', requiresConfirmation: false, requiresReason: false },
  { from: 'SHIPPED', to: 'DELIVERED', kind: 'forward', actionLabel: 'Confirmar entrega', icon: 'verified', requiresConfirmation: true, requiresReason: false },
  { from: 'READY', to: 'PREPARING', kind: 'backward', actionLabel: 'Volver a preparación', icon: 'undo', requiresConfirmation: true, requiresReason: true },
  { from: 'SHIPPED', to: 'READY', kind: 'backward', actionLabel: 'Regresó a bodega', icon: 'undo', requiresConfirmation: true, requiresReason: true },
];

export const TERMINAL_STATES: readonly StateDelivery[] = ['DELIVERED'];
export const DELETABLE_STATES: readonly StateDelivery[] = ['PREPARING', 'READY'];
export const MAX_REASON_LENGTH = 255;

export function findTransition(from: StateDelivery, to: StateDelivery): DeliveryTransition | undefined {
  return TRANSITIONS.find((t) => t.from === from && t.to === to);
}

export function canTransition(from: StateDelivery, to: StateDelivery): boolean {
  return from !== to && !!findTransition(from, to);
}

export function availableTransitions(from: StateDelivery): DeliveryTransition[] {
  return TRANSITIONS.filter((t) => t.from === from);
}

export function nextTransition(from: StateDelivery): DeliveryTransition | undefined {
  return TRANSITIONS.find((t) => t.from === from && t.kind === 'forward');
}

export function isTerminal(state: StateDelivery): boolean {
  return TERMINAL_STATES.includes(state);
}

export function canDeleteDelivery(delivery: Pick<DeliveryDTO, 'state'>): boolean {
  return DELETABLE_STATES.includes(delivery.state);
}

/** Historial visible para administradores y para quien registró el domicilio. */
export function canViewDeliveryHistory(
  viewer: Pick<CurrentUser, 'idUser' | 'role'> | null,
  delivery: Pick<DeliveryDTO, 'idUser'>
): boolean {
  if (!viewer) {
    return false;
  }
  return viewer.role === 'ADMIN' || (delivery.idUser != null && delivery.idUser === viewer.idUser);
}

export function stateIndex(state: StateDelivery): number {
  return DELIVERY_STATES.indexOf(state);
}

/** Porcentaje de avance del domicilio dentro del flujo (0–100). */
export function progressPercent(state: StateDelivery): number {
  return Math.round((stateIndex(state) / (DELIVERY_STATES.length - 1)) * 100);
}

// ---------------------------------------------------------------------------
// Puntualidad / SLA
// ---------------------------------------------------------------------------

export type DeliveryUrgency = 'overdue' | 'today' | 'upcoming' | 'done';

export function deliveryUrgency(delivery: Pick<DeliveryDTO, 'state' | 'dateDelivery'>, now = new Date()): DeliveryUrgency {
  if (isTerminal(delivery.state)) {
    return 'done';
  }
  const due = new Date(delivery.dateDelivery);
  if (Number.isNaN(due.getTime())) {
    return 'upcoming';
  }
  if (due.getTime() < now.getTime()) {
    return 'overdue';
  }
  return isSameDay(due, now) ? 'today' : 'upcoming';
}

export const URGENCY_LABELS: Record<DeliveryUrgency, string> = {
  overdue: 'Atrasada',
  today: 'Para hoy',
  upcoming: 'Programada',
  done: 'Completada',
};

/**
 * Orden dentro de una columna: primero las atrasadas, luego por fecha de entrega más cercana.
 * En la columna de entregadas, la más reciente primero.
 */
export function compareDeliveries(a: DeliveryDTO, b: DeliveryDTO, now = new Date()): number {
  const ta = new Date(a.dateDelivery).getTime() || 0;
  const tb = new Date(b.dateDelivery).getTime() || 0;
  if (isTerminal(a.state) && isTerminal(b.state)) {
    return tb - ta;
  }
  const rank = (d: DeliveryDTO) => (deliveryUrgency(d, now) === 'overdue' ? 0 : 1);
  return rank(a) - rank(b) || ta - tb;
}

function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
