import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TransfersRoutingModule } from './transfers-routing.module';
import { TransferListComponent } from './transfer-list/transfer-list.component';
import { TransferFormComponent } from './transfer-form/transfer-form.component';
import { ReceiptUploadComponent } from './receipt-upload/receipt-upload.component';
import { ReceiptSourceComponent } from './receipt-source/receipt-source.component';

@NgModule({
  declarations: [TransferListComponent, TransferFormComponent, ReceiptUploadComponent, ReceiptSourceComponent],
  imports: [SharedModule, TransfersRoutingModule],
})
export class TransfersModule {}
