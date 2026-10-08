import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockOutFormComponent } from './stock-out-form/stock-out-form.component';

const routes: Routes = [{ path: '', component: StockOutFormComponent, title: 'Salida de stock · VRIA' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockOutRoutingModule {}
