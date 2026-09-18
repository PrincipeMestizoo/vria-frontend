import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';
import { roleGuard } from './core/guards/role.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivate: [guestGuard],
    loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'products',
        canActivate: [roleGuard(['ADMIN', 'WAREHOUSE_KEEPER'])],
        loadChildren: () => import('./features/products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'categories',
        canActivate: [roleGuard(['ADMIN', 'WAREHOUSE_KEEPER'])],
        loadChildren: () => import('./features/categories/categories.module').then((m) => m.CategoriesModule),
      },
      {
        path: 'type-categories',
        canActivate: [roleGuard(['ADMIN', 'WAREHOUSE_KEEPER'])],
        loadChildren: () =>
          import('./features/type-categories/type-categories.module').then((m) => m.TypeCategoriesModule),
      },
      {
        path: 'deliveries',
        canActivate: [roleGuard(['ADMIN', 'COMMERCIAL_ADVISOR'])],
        loadChildren: () => import('./features/deliveries/deliveries.module').then((m) => m.DeliveriesModule),
      },
      {
        path: 'transfers',
        canActivate: [roleGuard(['ADMIN', 'COMMERCIAL_ADVISOR'])],
        loadChildren: () => import('./features/transfers/transfers.module').then((m) => m.TransfersModule),
      },
      {
        path: 'users',
        canActivate: [roleGuard(['ADMIN'])],
        loadChildren: () => import('./features/users/users.module').then((m) => m.UsersModule),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
