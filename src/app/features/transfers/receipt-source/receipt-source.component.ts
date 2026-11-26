import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RECEIPT_ACCEPTED_TYPES } from '../../../core/models';

/** Botones para adjuntar un comprobante: cámara (solo pantallas táctiles) o archivo. */
@Component({
  selector: 'app-receipt-source',
  templateUrl: './receipt-source.component.html',
  styleUrl: './receipt-source.component.scss',
})
export class ReceiptSourceComponent {
  @Input() cameraLabel = 'Tomar foto';
  @Input() fileLabel = 'Cargar imagen o PDF';
  @Input() disabled = false;
  @Output() readonly fileSelected = new EventEmitter<File>();

  readonly acceptedTypes = RECEIPT_ACCEPTED_TYPES.join(',');
  // En escritorio `capture` se ignora y abriría el mismo selector de archivos
  readonly canUseCamera = window.matchMedia('(pointer: coarse)').matches;

  onChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (file) {
      this.fileSelected.emit(file);
    }
  }
}
