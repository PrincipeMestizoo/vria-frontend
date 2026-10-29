import { Injectable, NgZone } from '@angular/core';

/**
 * Publica el area realmente visible como variables CSS en <html>:
 * - --vv-height: alto visible (se reduce al abrir el teclado en movil)
 * - --vv-top:    desplazamiento del viewport visual (iOS lo mueve con el teclado)
 * - --kb-inset:  espacio que ocupa el teclado en pantalla
 * `100vh` no cambia con el teclado, por eso los paneles flotantes usan estas variables.
 */
@Injectable({ providedIn: 'root' })
export class ViewportService {
  private started = false;

  constructor(private readonly zone: NgZone) {}

  start(): void {
    const vv = window.visualViewport;
    if (this.started || !vv) return;
    this.started = true;

    const root = document.documentElement.style;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const keyboard = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
        root.setProperty('--vv-height', `${vv.height}px`);
        root.setProperty('--vv-top', `${vv.offsetTop}px`);
        root.setProperty('--kb-inset', `${keyboard}px`);
      });
    };

    // Fuera de la zona: son eventos muy frecuentes y no tocan el estado de Angular
    this.zone.runOutsideAngular(() => {
      vv.addEventListener('resize', update);
      vv.addEventListener('scroll', update);
    });
    update();
  }
}
