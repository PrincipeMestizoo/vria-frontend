import { NgModule } from '@angular/core';
import { LayoutModule as CdkLayoutModule } from '@angular/cdk/layout';
import { SharedModule } from '../shared/shared.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

@NgModule({
  declarations: [MainLayoutComponent, AuthLayoutComponent],
  imports: [SharedModule, CdkLayoutModule],
  exports: [MainLayoutComponent, AuthLayoutComponent],
})
export class LayoutModule {}
