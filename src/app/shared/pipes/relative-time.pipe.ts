import { Pipe, PipeTransform } from '@angular/core';

const MINUTE = 60;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

/** Fecha relativa corta en espanol: "ahora", "hace 5 min", "hace 2 h", "ayer", "12 oct". */
@Pipe({ name: 'relativeTime' })
export class RelativeTimePipe implements PipeTransform {
  transform(value: string | Date | null | undefined): string {
    if (!value) {
      return '';
    }
    const date = new Date(value);
    const seconds = Math.max(0, Math.round((Date.now() - date.getTime()) / 1000));

    if (seconds < MINUTE) {
      return 'ahora';
    }
    if (seconds < HOUR) {
      return `hace ${Math.floor(seconds / MINUTE)} min`;
    }
    if (seconds < DAY) {
      return `hace ${Math.floor(seconds / HOUR)} h`;
    }
    if (seconds < 2 * DAY) {
      return 'ayer';
    }
    return date.toLocaleDateString('es-CO', { day: 'numeric', month: 'short' });
  }
}
