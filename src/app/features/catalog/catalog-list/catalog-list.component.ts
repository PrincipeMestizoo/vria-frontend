import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { catchError, finalize, forkJoin, of } from 'rxjs';
import { ProductService } from '../../../core/services/product.service';
import { ActivityNotificationService } from '../../../core/services/activity-notification.service';
import { ActivityNotification, ProductResponseDTO } from '../../../core/models';
import { listStagger } from '../../../shared/animations/animations';
import { STOCK_LEVELS, STOCK_LEVEL_LABELS, StockLevel, getStockLevel } from '../../../shared/utils/stock-level';
import {
  PRODUCT_CHANGE_LABELS,
  latestChangeByProduct,
  prioritizeChanged,
} from '../../../shared/utils/notification-meta';

const HIGHLIGHT_MS = 1800;

// Grilla de 4 columnas x 3 filas por pagina
const PAGE_SIZE = 12;

interface CategoryOption {
  idCategory: number | null;
  nameCategory: string;
}

interface CatalogItem {
  product: ProductResponseDTO;
  level: StockLevel;
  imageFailed: boolean;
  // Ultimo cambio en las ultimas 24 h; los productos modificados se muestran primero
  change?: ActivityNotification;
}

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrl: './catalog-list.component.scss',
  animations: [listStagger],
})
export class CatalogListComponent implements OnInit {
  readonly pageSize = PAGE_SIZE;
  readonly levelLabels = STOCK_LEVEL_LABELS;
  readonly stockLevels: StockLevel[] = STOCK_LEVELS;
  readonly changeLabels = PRODUCT_CHANGE_LABELS;
  loading = true;
  items: CatalogItem[] = [];
  filtered: CatalogItem[] = [];
  pageItems: CatalogItem[] = [];
  pageIndex = 0;
  recentChanges: ActivityNotification[] = [];
  highlightedId: number | null = null;

  // Las categorias se derivan de los productos: /categories no esta abierto a todos los roles
  categories: CategoryOption[] = [];
  searchTerm = '';
  categoryFilter: number | null | 'ALL' = 'ALL';
  levelFilter: StockLevel | 'ALL' = 'ALL';

  constructor(
    private readonly productService: ProductService,
    private readonly activityService: ActivityNotificationService
  ) {}

  ngOnInit(): void {
    forkJoin({
      products: this.productService.findAll(),
      // Si el historial falla el catalogo se muestra igual, sin resaltar cambios
      changes: this.activityService.recentProductChanges().pipe(catchError(() => of([]))),
    })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(({ products, changes }) => {
        const latest = latestChangeByProduct(changes);
        this.recentChanges = changes;
        this.items = prioritizeChanged(products, (p) => p.idProduct, latest).map((product) => ({
          product,
          level: getStockLevel(product.stock),
          imageFailed: !product.photo,
          change: latest.get(product.idProduct),
        }));
        this.categories = this.extractCategories(products);
        this.applyFilters();
      });
  }

  /** Lleva al usuario a la tarjeta del producto elegido en la ventana de cambios. */
  focusProduct(change: ActivityNotification): void {
    if (this.hasFilters) {
      this.clearFilters();
    }
    const index = this.filtered.findIndex((item) => item.product.idProduct === change.entityId);
    if (index < 0) {
      return;
    }
    this.setPage(Math.floor(index / this.pageSize));
    this.highlightedId = change.entityId;
    setTimeout(() =>
      document.getElementById(`product-${change.entityId}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    setTimeout(() => (this.highlightedId = null), HIGHLIGHT_MS);
  }

  get hasFilters(): boolean {
    return this.searchTerm.trim() !== '' || this.categoryFilter !== 'ALL' || this.levelFilter !== 'ALL';
  }

  applyFilters(): void {
    const term = this.searchTerm.trim().toLowerCase();
    this.filtered = this.items.filter(
      ({ product, level }) =>
        (!term || product.nameProduct.toLowerCase().includes(term)) &&
        (this.categoryFilter === 'ALL' || product.idCategory === this.categoryFilter) &&
        (this.levelFilter === 'ALL' || level === this.levelFilter)
    );
    this.setPage(0);
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.categoryFilter = 'ALL';
    this.levelFilter = 'ALL';
    this.applyFilters();
  }

  onPage(event: PageEvent): void {
    this.setPage(event.pageIndex);
  }

  trackById(_: number, item: CatalogItem): number {
    return item.product.idProduct;
  }

  private setPage(index: number): void {
    this.pageIndex = index;
    const start = index * this.pageSize;
    this.pageItems = this.filtered.slice(start, start + this.pageSize);
  }

  private extractCategories(products: ProductResponseDTO[]): CategoryOption[] {
    const byId = new Map<number | null, string>();
    products.forEach((p) => byId.set(p.idCategory, p.nameCategory));
    return [...byId]
      .map(([idCategory, nameCategory]) => ({ idCategory, nameCategory }))
      .sort((a, b) => a.nameCategory.localeCompare(b.nameCategory));
  }
}
