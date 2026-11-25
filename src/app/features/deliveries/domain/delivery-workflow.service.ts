import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map, of } from 'rxjs';
import { DELIVERY_STATE_LABELS, DeliveryDTO, StateDelivery } from '../../../core/models';
import { NotificationService } from '../../../core/services/notification.service';
import { ConfirmDialogService } from '../../../shared/services/confirm-dialog.service';
import {
  DeliveryReasonDialogComponent,
  DeliveryReasonDialogData,
} from '../delivery-reason-dialog/delivery-reason-dialog.component';
import { canDeleteDelivery, canTransition, findTransition, isTerminal } from './delivery-workflow';

/** Resultado de una operación autorizada. `reason` viene informado cuando la regla lo exige. */
export interface WorkflowApproval {
  reason: string | null;
}

@Injectable({ providedIn: 'root' })
export class DeliveryWorkflowService {
  constructor(
    private readonly confirmDialog: ConfirmDialogService,
    private readonly dialog: MatDialog,
    private readonly notification: NotificationService
  ) {}

  /**
   * Valida la transición contra las reglas del flujo y pide confirmación o motivo
   * según corresponda. Emite la aprobación, o `null` si no puede aplicarse o se cancela.
   */
  authorize(delivery: DeliveryDTO, to: StateDelivery): Observable<WorkflowApproval | null> {
    const from = delivery.state;
    if (from === to) {
      return of(null);
    }

    if (!canTransition(from, to)) {
      this.notification.error(this.rejectionMessage(from, to));
      return of(null);
    }

    const transition = findTransition(from, to)!;

    if (transition.requiresReason) {
      return this.askReason({
        title: 'Retroceder estado',
        message: `El domicilio de "${delivery.nameClient}" pasará de "${DELIVERY_STATE_LABELS[from]}" a "${DELIVERY_STATE_LABELS[to]}". Indica el motivo; quedará en el historial.`,
        confirmLabel: 'Retroceder',
        danger: true,
        placeholder: 'Ej.: el cliente no estaba en la dirección',
      });
    }

    if (!transition.requiresConfirmation) {
      return of({ reason: null });
    }

    return this.confirmDialog
      .confirm({
        title: 'Confirmar entrega',
        message: `¿Confirmas que el domicilio de "${delivery.nameClient}" fue entregado? Una vez confirmado ya no podrá modificarse.`,
        confirmLabel: 'Confirmar entrega',
      })
      .pipe(map((ok) => (ok ? { reason: null } : null)));
  }

  /** Valida que el domicilio pueda eliminarse y solicita el motivo. */
  authorizeDeletion(delivery: DeliveryDTO): Observable<WorkflowApproval | null> {
    if (!canDeleteDelivery(delivery)) {
      this.notification.error('Solo se pueden eliminar domicilios que aún no han sido despachados.');
      return of(null);
    }
    return this.askReason({
      title: 'Eliminar domicilio',
      message: `Se eliminará el domicilio de "${delivery.nameClient}". Indica el motivo; quedará en el historial.`,
      confirmLabel: 'Eliminar',
      danger: true,
      placeholder: 'Ej.: el cliente canceló el pedido',
    });
  }

  private askReason(data: DeliveryReasonDialogData): Observable<WorkflowApproval | null> {
    return this.dialog
      .open<DeliveryReasonDialogComponent, DeliveryReasonDialogData, string>(DeliveryReasonDialogComponent, {
        width: '480px',
        maxWidth: '95vw',
        data,
      })
      .afterClosed()
      .pipe(map((reason) => (reason ? { reason } : null)));
  }

  private rejectionMessage(from: StateDelivery, to: StateDelivery): string {
    if (isTerminal(from)) {
      return 'Las entregas confirmadas no pueden cambiar de estado.';
    }
    return `No se puede pasar de "${DELIVERY_STATE_LABELS[from]}" a "${DELIVERY_STATE_LABELS[to]}": el domicilio debe avanzar un paso a la vez.`;
  }
}
