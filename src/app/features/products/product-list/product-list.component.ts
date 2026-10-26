import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, finalize, forkJoin, of } from 'rxjs';
import { ProductService } from '../../../core/services/product.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ConfirmDialogService } from '../../../shared/services/confirm-dialog.service';
import { AuthService } from '../../../core/services/auth.service';
import { ActivityNotificationService } from '../../../core/services/activity-notification.service';
import { ActivityNotification, ProductResponseDTO } from '../../../core/models';
import {
  PRODUCT_CHANGE_LABELS,
  latestChangeByProduct,
  prioritizeChanged,
} from '../../../shared/utils/notification-meta';

const HIGHLIGHT_MS = 1800;
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  readonly displayedColumns = ['nameProduct', 'nameCategory', 'stock', 'price', 'actions'];
  loading = true;
  products: ProductResponseDTO[] = [];
  filtered: ProductResponseDTO[] = [];
  searchTerm = '';
  readonly changeLabels = PRODUCT_CHANGE_LABELS;
  recentChanges: ActivityNotification[] = [];
  // Ultimo cambio por producto (24 h): esas filas se muestran primero
  changesById = new Map<number, ActivityNotification>();
  highlightedId: number | null = null;

  constructor(
    private readonly productService: ProductService,
    private readonly notification: NotificationService,
    private readonly dialog: MatDialog,
    private readonly confirmDialog: ConfirmDialogService,
    private readonly activityService: ActivityNotificationService,
    readonly authService: AuthService
  ) {}

  get canManage(): boolean {
    return this.authService.hasAnyRole(['ADMIN', 'WAREHOUSE_KEEPER']);
  }

  get canDelete(): boolean {
    return this.authService.hasAnyRole(['ADMIN', 'WAREHOUSE_KEEPER']);
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    forkJoin({
      products: this.productService.findAll(),
      changes: this.activityService.recentProductChanges().pipe(catchError(() => of([]))),
    })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(({ products, changes }) => {
        this.recentChanges = changes;
        this.changesById = latestChangeByProduct(changes);
        this.products = prioritizeChanged(products, (p) => p.idProduct, this.changesById);
        this.applyFilter();
      });
  }

  applyFilter(): void {
    const term = this.searchTerm.trim().toLowerCase();
    this.filtered = term
      ? this.products.filter(
          (p) =>
            p.nameProduct.toLowerCase().includes(term) ||
            p.nameCategory.toLowerCase().includes(term) ||
            (p.reference || '').toLowerCase().includes(term)
        )
      : this.products;
  }

  /** Ubica y resalta la fila del producto elegido en la ventana de cambios. */
  focusProduct(change: ActivityNotification): void {
    if (change.entityId == null) {
      return;
    }
    this.searchTerm = '';
    this.applyFilter();
    this.highlightedId = change.entityId;
    setTimeout(() =>
      document.getElementById(`product-row-${change.entityId}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    setTimeout(() => (this.highlightedId = null), HIGHLIGHT_MS);
  }

  openForm(product: ProductResponseDTO | null): void {
    const ref = this.dialog.open(ProductFormComponent, {
      width: '520px',
      maxWidth: '95vw',
      data: { product },
      autoFocus: false,
    });

    ref.afterClosed().subscribe((changed) => {
      if (changed) {
        this.load();
      }
    });
  }

  remove(product: ProductResponseDTO): void {
    this.confirmDialog
      .confirm({
        title: 'Eliminar producto',
        message: `¿Seguro que deseas eliminar "${product.nameProduct}"?`,
        danger: true,
        confirmLabel: 'Eliminar',
      })
      .subscribe((confirmed) => {
        if (!confirmed) {
          return;
        }
        this.productService.delete(product.idProduct).subscribe(() => {
          this.notification.success('Producto eliminado.');
          this.load();
        });
      });
  }
}
