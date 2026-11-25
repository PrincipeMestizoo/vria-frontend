import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '../../shared/shared.module';
import { DeliveriesRoutingModule } from './deliveries-routing.module';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';
import { DeliveryBoardComponent } from './delivery-board/delivery-board.component';

@NgModule({
  declarations: [DeliveryBoardComponent, DeliveryListComponent, DeliveryFormComponent],
  imports: [SharedModule, DragDropModule, DeliveriesRoutingModule],
})
export class DeliveriesModule {}
