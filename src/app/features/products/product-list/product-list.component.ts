import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { ProductService } from '../../../core/services/product.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ConfirmDialogService } from '../../../shared/services/confirm-dialog.service';
import { AuthService } from '../../../core/services/auth.service';
import { ProductResponseDTO } from '../../../core/models';
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

  constructor(
    private readonly productService: ProductService,
    private readonly notification: NotificationService,
    private readonly dialog: MatDialog,
    private readonly confirmDialog: ConfirmDialogService,
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
    this.productService
      .findAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((data) => {
        this.products = data;
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
