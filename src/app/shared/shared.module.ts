import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';

import { RoleLabelPipe } from './pipes/role-label.pipe';
import { DeliveryStateLabelPipe } from './pipes/delivery-state-label.pipe';
import { PayModeLabelPipe } from './pipes/pay-mode-label.pipe';
import { InitialsPipe } from './pipes/initials.pipe';

import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';

const DECLARATIONS = [
  RoleLabelPipe,
  DeliveryStateLabelPipe,
  PayModeLabelPipe,
  InitialsPipe,
  LoadingOverlayComponent,
  SubmitButtonComponent,
  ConfirmDialogComponent,
  PageHeaderComponent,
  EmptyStateComponent,
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, MaterialModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    ...DECLARATIONS,
  ],
})
export class SharedModule {}
