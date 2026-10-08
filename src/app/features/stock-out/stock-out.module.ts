import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { StockOutRoutingModule } from './stock-out-routing.module';
import { StockOutFormComponent } from './stock-out-form/stock-out-form.component';
import { StockOutDialogComponent } from './stock-out-dialog/stock-out-dialog.component';

@NgModule({
  declarations: [StockOutFormComponent, StockOutDialogComponent],
  imports: [SharedModule, StockOutRoutingModule],
})
export class StockOutModule {}
