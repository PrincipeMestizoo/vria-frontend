import { Component, EventEmitter, Input, Output } from '@angular/core';

export type SubmitButtonVariant = 'primary' | 'accent' | 'stroked' | 'warn';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrl: './submit-button.component.scss',
})
export class SubmitButtonComponent {
  @Input() label = 'Guardar';
  @Input() loadingLabel = 'Guardando…';
  @Input() loading = false;
  @Input() disabled = false;
  @Input() type: 'submit' | 'button' = 'submit';
  @Input() variant: SubmitButtonVariant = 'primary';
  @Input() icon: string | null = null;
  @Output() action = new EventEmitter<void>();

  get isDisabled(): boolean {
    return this.disabled || this.loading;
  }

  onClick(): void {
    if (this.type === 'button' && !this.isDisabled) {
      this.action.emit();
    }
  }
}
