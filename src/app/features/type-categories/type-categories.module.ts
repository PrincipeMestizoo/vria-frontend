import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TypeCategoriesRoutingModule } from './type-categories-routing.module';
import { TypeCategoryListComponent } from './type-category-list/type-category-list.component';
import { TypeCategoryFormComponent } from './type-category-form/type-category-form.component';

@NgModule({
  declarations: [TypeCategoryListComponent, TypeCategoryFormComponent],
  imports: [SharedModule, TypeCategoriesRoutingModule],
})
export class TypeCategoriesModule {}
