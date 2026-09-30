import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogListComponent } from './catalog-list/catalog-list.component';

@NgModule({
  declarations: [CatalogListComponent],
  imports: [SharedModule, CatalogRoutingModule],
})
export class CatalogModule {}
