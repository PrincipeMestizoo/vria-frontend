import { Pipe, PipeTransform } from '@angular/core';
import { ROLE_LABELS, TypeRole } from '../../core/models';

@Pipe({ name: 'roleLabel' })
export class RoleLabelPipe implements PipeTransform {
  transform(value: TypeRole | null | undefined): string {
    return value ? ROLE_LABELS[value] : '—';
  }
}
