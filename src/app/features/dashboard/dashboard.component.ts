import { Component, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';
import { ProductService } from '../../core/services/product.service';
import { CategoryService } from '../../core/services/category.service';
import { TypeCategoryService } from '../../core/services/type-category.service';
import { DeliveryService } from '../../core/services/delivery.service';
import { TransferService } from '../../core/services/transfer.service';
import { UserService } from '../../core/services/user.service';
import { CurrentUser, DeliveryDTO, TypeRole } from '../../core/models';
import { listStagger } from '../../shared/animations/animations';

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
export class DashboardComponent implements OnInit {
  currentUser: CurrentUser | null = null;
  loadingStats = true;
  stats: StatCard[] = [];
  quickActions: QuickAction[] = [];
  pendingDeliveries: DeliveryDTO[] = [];
  canSeeDeliveries = false;

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

    this.quickActions = QUICK_ACTIONS.filter((action) => this.authService.hasAnyRole(action.roles));

    forkJoin({
      products: canSeeInventory ? this.productService.findAll().pipe(catchError(() => of([]))) : of([]),
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
  }
}
