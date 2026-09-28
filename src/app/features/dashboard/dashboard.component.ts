import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin, interval, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';
import { ProductService } from '../../core/services/product.service';
import { CategoryService } from '../../core/services/category.service';
import { TypeCategoryService } from '../../core/services/type-category.service';
import { DeliveryService } from '../../core/services/delivery.service';
import { TransferService } from '../../core/services/transfer.service';
import { UserService } from '../../core/services/user.service';
import { CurrentUser, DeliveryDTO, ProductResponseDTO, TypeRole } from '../../core/models';
import { listStagger } from '../../shared/animations/animations';
import {
  STOCK_LEVELS,
  STOCK_LEVEL_LABELS,
  StockLevel,
  getStockLevel,
} from '../../shared/utils/stock-level';

const STOCK_REFRESH_MS = 60_000;

interface StockItem {
  id: number;
  name: string;
  category: string;
  stock: number;
  level: StockLevel;
}

interface StatCard {
  label: string;
  value: number;
  icon: string;
  accent: 'blue' | 'purple' | 'green' | 'amber';
  path: string;
}

interface QuickAction {
  label: string;
  icon: string;
  path: string;
  colorClass: string;
  roles: TypeRole[];
}

const QUICK_ACTIONS: QuickAction[] = [
  {
    label: 'Nueva entrega',
    icon: 'local_shipping',
    path: '/deliveries',
    colorClass: 'vria-btn-info',
    roles: ['ADMIN', 'COMMERCIAL_ADVISOR'],
  },
  {
    label: 'Nuevo producto',
    icon: 'inventory_2',
    path: '/products',
    colorClass: 'vria-btn-success',
    roles: ['ADMIN', 'WAREHOUSE_KEEPER'],
  },
  {
    label: 'Nueva transferencia',
    icon: 'receipt_long',
    path: '/transfers',
    colorClass: 'vria-btn-warning',
    roles: ['ADMIN', 'COMMERCIAL_ADVISOR'],
  },
  {
    label: 'Gestionar usuarios',
    icon: 'manage_accounts',
    path: '/users',
    colorClass: 'vria-btn-danger',
    roles: ['ADMIN'],
  },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  animations: [listStagger],
})
export class DashboardComponent implements OnInit, OnDestroy {
  currentUser: CurrentUser | null = null;
  loadingStats = true;
  stats: StatCard[] = [];
  quickActions: QuickAction[] = [];
  pendingDeliveries: DeliveryDTO[] = [];
  canSeeDeliveries = false;
  canSeeInventory = false;

  readonly stockLevels = STOCK_LEVELS;
  readonly stockLevelLabels = STOCK_LEVEL_LABELS;
  stockItems: StockItem[] = [];
  visibleStockItems: StockItem[] = [];
  stockSummary: Record<StockLevel, number> = { OK: 0, LOW: 0, CRITICAL: 0 };
  stockFilter: StockLevel | null = null;
  stockError = false;
  refreshingStock = false;
  stockUpdatedAt: Date | null = null;

  private stockRefreshSub?: Subscription;

  constructor(
    private readonly authService: AuthService,
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService,
    private readonly typeCategoryService: TypeCategoryService,
    private readonly deliveryService: DeliveryService,
    private readonly transferService: TransferService,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.currentUser;
    const canSeeInventory = this.authService.hasAnyRole(['ADMIN', 'WAREHOUSE_KEEPER']);
    const canSeeDeliveries = this.authService.hasAnyRole(['ADMIN', 'COMMERCIAL_ADVISOR']);
    const canSeeTransfers = this.authService.hasAnyRole(['ADMIN', 'COMMERCIAL_ADVISOR']);
    const canSeeUsers = this.authService.hasAnyRole(['ADMIN']);
    this.canSeeDeliveries = canSeeDeliveries;
    this.canSeeInventory = canSeeInventory;

    this.quickActions = QUICK_ACTIONS.filter((action) => this.authService.hasAnyRole(action.roles));

    forkJoin({
      products: this.productService.findAll().pipe(
        catchError(() => {
          this.stockError = true;
          return of([]);
        })
      ),
      categories: canSeeInventory ? this.categoryService.findAll().pipe(catchError(() => of([]))) : of([]),
      typeCategories: canSeeInventory
        ? this.typeCategoryService.findAll().pipe(catchError(() => of([])))
        : of([]),
      deliveries: canSeeDeliveries ? this.deliveryService.findAll().pipe(catchError(() => of([]))) : of([]),
      transfers: canSeeTransfers
        ? this.transferService.findAll().pipe(catchError(() => of([])))
        : of([]),
      users: canSeeUsers ? this.userService.findAll().pipe(catchError(() => of([]))) : of([]),
    })
      .pipe(
        map(({ products, categories, typeCategories, deliveries, transfers, users }) => {
          this.setStockItems(products);
          this.pendingDeliveries = canSeeDeliveries
            ? deliveries.filter((delivery) => delivery.state !== 'DELIVERED').slice(0, 5)
            : [];

          const cards: StatCard[] = [];

          if (canSeeInventory) {
            cards.push(
              {
                label: 'Productos activos',
                value: products.length,
                icon: 'inventory_2',
                accent: 'blue',
                path: '/products',
              },
              {
                label: 'Categorías',
                value: categories.length,
                icon: 'category',
                accent: 'purple',
                path: '/categories',
              },
              {
                label: 'Tipos de categoría',
                value: typeCategories.length,
                icon: 'sell',
                accent: 'amber',
                path: '/type-categories',
              }
            );
          }

          if (canSeeDeliveries) {
            cards.push({
              label: 'Entregas registradas',
              value: deliveries.length,
              icon: 'local_shipping',
              accent: 'blue',
              path: '/deliveries',
            });
          }

          if (canSeeTransfers) {
            cards.push({
              label: 'Transferencias',
              value: transfers.length,
              icon: 'receipt_long',
              accent: 'purple',
              path: '/transfers',
            });
          }

          if (canSeeUsers) {
            cards.push({
              label: 'Usuarios',
              value: users.length,
              icon: 'manage_accounts',
              accent: 'green',
              path: '/users',
            });
          }

          return cards;
        })
      )
      .subscribe((cards) => {
        this.stats = cards;
        this.loadingStats = false;
      });

    this.stockRefreshSub = interval(STOCK_REFRESH_MS).subscribe(() => this.refreshStock(true));
  }

  ngOnDestroy(): void {
    this.stockRefreshSub?.unsubscribe();
  }

  refreshStock(silent = false): void {
    if (this.refreshingStock) {
      return;
    }
    this.refreshingStock = true;
    this.productService.findAll({ silent }).subscribe({
      next: (products) => {
        this.stockError = false;
        this.setStockItems(products);
        const productsCard = this.stats.find((stat) => stat.path === '/products');
        if (productsCard) {
          productsCard.value = products.length;
        }
        this.refreshingStock = false;
      },
      error: () => {
        this.stockError = true;
        this.refreshingStock = false;
      },
    });
  }

  toggleStockFilter(level: StockLevel): void {
    this.stockFilter = this.stockFilter === level ? null : level;
    this.applyStockFilter();
  }

  trackByStockItem(_: number, item: StockItem): number {
    return item.id;
  }

  private setStockItems(products: ProductResponseDTO[]): void {
    this.stockItems = products
      .map((product) => ({
        id: product.idProduct,
        name: product.nameProduct,
        category: product.nameCategory,
        stock: product.stock,
        level: getStockLevel(product.stock),
      }))
      .sort((a, b) => a.stock - b.stock || a.name.localeCompare(b.name));

    this.stockSummary = { OK: 0, LOW: 0, CRITICAL: 0 };
    for (const item of this.stockItems) {
      this.stockSummary[item.level]++;
    }
    this.stockUpdatedAt = new Date();
    this.applyStockFilter();
  }

  private applyStockFilter(): void {
    this.visibleStockItems = this.stockFilter
      ? this.stockItems.filter((item) => item.level === this.stockFilter)
      : this.stockItems;
  }
}
