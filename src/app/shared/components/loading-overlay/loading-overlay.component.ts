import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../../../core/services/loading.service';
import { fadeInOut } from '../../animations/animations';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrl: './loading-overlay.component.scss',
  animations: [fadeInOut],
})
export class LoadingOverlayComponent {
  readonly loading$: Observable<boolean>;

  constructor(private readonly loadingService: LoadingService) {
    this.loading$ = this.loadingService.loading$;
  }
}
