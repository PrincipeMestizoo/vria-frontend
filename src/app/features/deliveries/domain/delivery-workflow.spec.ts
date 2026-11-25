import { DeliveryDTO } from '../../../core/models';
import {
  availableTransitions,
  canDeleteDelivery,
  canTransition,
  canViewDeliveryHistory,
  compareDeliveries,
  findTransition,
  deliveryUrgency,
  nextTransition,
  progressPercent,
} from './delivery-workflow';

function delivery(partial: Partial<DeliveryDTO>): DeliveryDTO {
  return {
    idDelivery: 1,
    nameClient: 'Cliente',
    nameDelivery: 'Repartidor',
    address: 'Calle 1',
    payMode: 'CASH',
    dateDelivery: '2026-11-24T15:00:00',
    state: 'PREPARING',
    ...partial,
  } as DeliveryDTO;
}

describe('delivery-workflow', () => {
  describe('canTransition', () => {
    it('permite avanzar un paso', () => {
      expect(canTransition('PREPARING', 'READY')).toBeTrue();
      expect(canTransition('READY', 'SHIPPED')).toBeTrue();
      expect(canTransition('SHIPPED', 'DELIVERED')).toBeTrue();
    });

    it('no permite saltar etapas', () => {
      expect(canTransition('PREPARING', 'SHIPPED')).toBeFalse();
      expect(canTransition('PREPARING', 'DELIVERED')).toBeFalse();
      expect(canTransition('READY', 'DELIVERED')).toBeFalse();
    });

    it('permite retroceder un paso salvo desde entregada', () => {
      expect(canTransition('READY', 'PREPARING')).toBeTrue();
      expect(canTransition('SHIPPED', 'READY')).toBeTrue();
      expect(canTransition('SHIPPED', 'PREPARING')).toBeFalse();
      expect(canTransition('DELIVERED', 'SHIPPED')).toBeFalse();
    });

    it('no considera transición quedarse en el mismo estado', () => {
      expect(canTransition('READY', 'READY')).toBeFalse();
    });
  });

  it('entregada es terminal: sin acciones disponibles', () => {
    expect(availableTransitions('DELIVERED')).toEqual([]);
    expect(nextTransition('DELIVERED')).toBeUndefined();
  });

  it('solo confirmar entrega y retrocesos requieren confirmación', () => {
    expect(nextTransition('PREPARING')!.requiresConfirmation).toBeFalse();
    expect(nextTransition('SHIPPED')!.requiresConfirmation).toBeTrue();
    expect(availableTransitions('READY').find((t) => t.kind === 'backward')!.requiresConfirmation).toBeTrue();
  });

  it('solo se eliminan domicilios no despachados', () => {
    expect(canDeleteDelivery({ state: 'PREPARING' })).toBeTrue();
    expect(canDeleteDelivery({ state: 'READY' })).toBeTrue();
    expect(canDeleteDelivery({ state: 'SHIPPED' })).toBeFalse();
    expect(canDeleteDelivery({ state: 'DELIVERED' })).toBeFalse();
  });

  it('calcula el progreso', () => {
    expect(progressPercent('PREPARING')).toBe(0);
    expect(progressPercent('DELIVERED')).toBe(100);
  });

  describe('deliveryUrgency', () => {
    const now = new Date('2026-11-24T12:00:00');

    it('marca atrasada si la fecha pasó y no se ha entregado', () => {
      expect(deliveryUrgency(delivery({ dateDelivery: '2026-11-24T10:00:00' }), now)).toBe('overdue');
    });

    it('marca para hoy si vence más tarde el mismo día', () => {
      expect(deliveryUrgency(delivery({ dateDelivery: '2026-11-24T18:00:00' }), now)).toBe('today');
    });

    it('marca programada si vence otro día', () => {
      expect(deliveryUrgency(delivery({ dateDelivery: '2026-11-26T09:00:00' }), now)).toBe('upcoming');
    });

    it('una entregada nunca está atrasada', () => {
      expect(deliveryUrgency(delivery({ state: 'DELIVERED', dateDelivery: '2026-01-01T00:00:00' }), now)).toBe('done');
    });
  });

  it('ordena atrasadas primero y luego por fecha más cercana', () => {
    const now = new Date('2026-11-24T12:00:00');
    const later = delivery({ idDelivery: 1, dateDelivery: '2026-11-25T10:00:00' });
    const soon = delivery({ idDelivery: 2, dateDelivery: '2026-11-24T14:00:00' });
    const late = delivery({ idDelivery: 3, dateDelivery: '2026-11-24T08:00:00' });
    const sorted = [later, soon, late].sort((a, b) => compareDeliveries(a, b, now));
    expect(sorted.map((d) => d.idDelivery)).toEqual([3, 2, 1]);
  });

  it('solo los retrocesos exigen motivo', () => {
    expect(findTransition('READY', 'PREPARING')!.requiresReason).toBeTrue();
    expect(findTransition('SHIPPED', 'READY')!.requiresReason).toBeTrue();
    expect(findTransition('PREPARING', 'READY')!.requiresReason).toBeFalse();
    expect(findTransition('SHIPPED', 'DELIVERED')!.requiresReason).toBeFalse();
  });

  describe('canViewDeliveryHistory', () => {
    const own = { idUser: 10 };

    it('el administrador ve cualquier historial', () => {
      expect(canViewDeliveryHistory({ idUser: 1, role: 'ADMIN' }, own)).toBeTrue();
    });

    it('el creador ve el historial de su domicilio', () => {
      expect(canViewDeliveryHistory({ idUser: 10, role: 'COMMERCIAL_ADVISOR' }, own)).toBeTrue();
    });

    it('otro asesor no ve el historial', () => {
      expect(canViewDeliveryHistory({ idUser: 11, role: 'COMMERCIAL_ADVISOR' }, own)).toBeFalse();
    });

    it('sin usuario o sin creador conocido no se muestra', () => {
      expect(canViewDeliveryHistory(null, own)).toBeFalse();
      expect(canViewDeliveryHistory({ idUser: 10, role: 'COMMERCIAL_ADVISOR' }, { idUser: null })).toBeFalse();
    });
  });
});
