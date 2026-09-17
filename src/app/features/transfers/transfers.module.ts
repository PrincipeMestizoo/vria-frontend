import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TransfersRoutingModule } from './transfers-routing.module';
import { TransferListComponent } from './transfer-list/transfer-list.component';
import { TransferFormComponent } from './transfer-form/transfer-form.component';

@NgModule({
  declarations: [TransferListComponent, TransferFormComponent],
  imports: [SharedModule, TransfersRoutingModule],
})
export class TransfersModule {}
