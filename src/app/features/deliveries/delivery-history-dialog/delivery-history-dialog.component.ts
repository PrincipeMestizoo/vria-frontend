import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import {
  DELIVERY_TRACE_ACTION_LABELS,
  DeliveryDTO,
  DeliveryStateHistoryDTO,
  DeliveryTraceAction,
} from '../../../core/models';
import { DeliveryService } from '../../../core/services/delivery.service';

export interface DeliveryHistoryDialogData {
  delivery: DeliveryDTO;
}

const ACTION_ICONS: Record<DeliveryTraceAction, string> = {
  CREATED: 'add_circle',
  ADVANCED: 'arrow_circle_right',
  REVERTED: 'undo',
  DELETED: 'delete',
};

/** Línea de tiempo con la trazabilidad de un domicilio. */
@Component({
  selector: 'app-delivery-history-dialog',
  templateUrl: './delivery-history-dialog.component.html',
  styleUrl: './delivery-history-dialog.component.scss',
})
export class DeliveryHistoryDialogComponent implements OnInit {
  readonly actionLabels = DELIVERY_TRACE_ACTION_LABELS;
  readonly actionIcons = ACTION_ICONS;

  loading = true;
  failed = false;
  entries: DeliveryStateHistoryDTO[] = [];

  constructor(
    private readonly deliveryService: DeliveryService,
    @Inject(MAT_DIALOG_DATA) readonly data: DeliveryHistoryDialogData
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    const id = this.data.delivery.idDelivery;
    if (id == null) {
      this.loading = false;
      return;
    }
    this.loading = true;
    this.failed = false;
    this.deliveryService
      .findHistory(id)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        // El más reciente primero: es lo que más se consulta.
        next: (entries) => (this.entries = [...entries].reverse()),
        error: () => (this.failed = true),
      });
  }

  trackById = (_: number, entry: DeliveryStateHistoryDTO) => entry.idHistory;
}
