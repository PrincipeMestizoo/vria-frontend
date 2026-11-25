import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DELIVERY_STATE_LABELS, DeliveryDTO, StateDelivery } from '../../../core/models';
import { NotificationService } from '../../../core/services/notification.service';
import { ConfirmDialogService } from '../../../shared/services/confirm-dialog.service';
import { canTransition, findTransition, isTerminal } from './delivery-workflow';

@Injectable({ providedIn: 'root' })
export class DeliveryWorkflowService {
  constructor(
    private readonly confirmDialog: ConfirmDialogService,
    private readonly notification: NotificationService
  ) {}

  /**
   * Valida la transición contra las reglas del flujo y, si la regla lo exige,
   * pide confirmación al usuario. Emite `true` cuando el cambio puede aplicarse.
   */
  authorize(delivery: DeliveryDTO, to: StateDelivery): Observable<boolean> {
    const from = delivery.state;
    if (from === to) {
      return of(false);
    }

    if (!canTransition(from, to)) {
      this.notification.error(this.rejectionMessage(from, to));
      return of(false);
    }

    const transition = findTransition(from, to)!;
    if (!transition.requiresConfirmation) {
      return of(true);
    }

    if (to === 'DELIVERED') {
      return this.confirmDialog.confirm({
        title: 'Confirmar entrega',
        message: `¿Confirmas que el domicilio de "${delivery.nameClient}" fue entregado? Una vez confirmado ya no podrá modificarse.`,
        confirmLabel: 'Confirmar entrega',
      });
    }

    return this.confirmDialog.confirm({
      title: 'Retroceder estado',
      message: `El domicilio de "${delivery.nameClient}" pasará de "${DELIVERY_STATE_LABELS[from]}" a "${DELIVERY_STATE_LABELS[to]}". ¿Deseas continuar?`,
      confirmLabel: 'Retroceder',
      danger: true,
    });
  }

  private rejectionMessage(from: StateDelivery, to: StateDelivery): string {
    if (isTerminal(from)) {
      return 'Las entregas confirmadas no pueden cambiar de estado.';
    }
    return `No se puede pasar de "${DELIVERY_STATE_LABELS[from]}" a "${DELIVERY_STATE_LABELS[to]}": el domicilio debe avanzar un paso a la vez.`;
  }
}
