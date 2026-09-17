import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeCategoryListComponent } from './type-category-list/type-category-list.component';

const routes: Routes = [
  { path: '', component: TypeCategoryListComponent, title: 'Tipos de categoría · VRIA' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeCategoriesRoutingModule {}
