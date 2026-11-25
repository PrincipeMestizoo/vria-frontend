import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { DeliveryBoardComponent } from './delivery-board/delivery-board.component';

const routes: Routes = [
  { path: '', component: DeliveryBoardComponent, title: 'Domicilios · VRIA' },
  { path: 'lista', component: DeliveryListComponent, title: 'Domicilios · VRIA' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveriesRoutingModule {}
