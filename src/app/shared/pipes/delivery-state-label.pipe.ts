import { Pipe, PipeTransform } from '@angular/core';
import { DELIVERY_STATE_LABELS, StateDelivery } from '../../core/models';

@Pipe({ name: 'deliveryStateLabel' })
export class DeliveryStateLabelPipe implements PipeTransform {
  transform(value: StateDelivery | null | undefined): string {
    return value ? DELIVERY_STATE_LABELS[value] : '—';
  }
}
