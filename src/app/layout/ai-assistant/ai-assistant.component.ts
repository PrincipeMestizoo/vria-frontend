import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';

interface ChatMessage {
  from: 'bot' | 'user';
  text: string;
}

// Maqueta del asistente: solo presentacion, sin integracion con backend.
@Component({
  selector: 'app-ai-assistant',
  templateUrl: './ai-assistant.component.html',
  styleUrl: './ai-assistant.component.scss',
})
export class AiAssistantComponent {
  @Input() open = false;
  @Output() closed = new EventEmitter<void>();

  // El cuerpo existe solo con el panel abierto: al aparecer, se lleva al ultimo mensaje
  @ViewChild('body') set body(ref: ElementRef<HTMLElement> | undefined) {
    this.bodyRef = ref;
    this.scrollToEnd();
  }
  private bodyRef?: ElementRef<HTMLElement>;

  readonly messages: ChatMessage[] = [
    { from: 'bot', text: '¡Hola! Soy Bokú. ¿En qué te puedo ayudar hoy?' },
    { from: 'user', text: '¿Qué productos tienen stock bajo?' },
    { from: 'bot', text: 'Puedo ayudarte a revisar inventario, traslados y entregas. Pronto tendré acceso a tus datos.' },
  ];

  readonly suggestions = ['Stock bajo', 'Traslados pendientes', 'Entregas de hoy'];

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.open) this.closed.emit();
  }

  // Al abrir el teclado el area visible se encoge: se mantiene a la vista la conversacion reciente
  scrollToEnd(): void {
    setTimeout(() => {
      const el = this.bodyRef?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    }, 250);
  }
}
