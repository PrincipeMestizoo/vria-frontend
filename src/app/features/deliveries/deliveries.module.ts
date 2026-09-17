import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DeliveriesRoutingModule } from './deliveries-routing.module';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';

@NgModule({
  declarations: [DeliveryListComponent, DeliveryFormComponent],
  imports: [SharedModule, DeliveriesRoutingModule],
})
export class DeliveriesModule {}
