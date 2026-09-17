import { Pipe, PipeTransform } from '@angular/core';
import { PAY_MODE_LABELS, PayMode } from '../../core/models';

@Pipe({ name: 'payModeLabel' })
export class PayModeLabelPipe implements PipeTransform {
  transform(value: PayMode | null | undefined): string {
    return value ? PAY_MODE_LABELS[value] : '—';
  }
}
