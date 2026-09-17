import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss',
})
export class EmptyStateComponent {
  @Input() icon = 'inbox';
  @Input() title = 'Sin resultados';
  @Input() message = 'Aún no hay información para mostrar aquí.';
}
