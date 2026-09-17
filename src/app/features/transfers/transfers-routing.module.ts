import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferListComponent } from './transfer-list/transfer-list.component';

const routes: Routes = [{ path: '', component: TransferListComponent, title: 'Transferencias · VRIA' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransfersRoutingModule {}
