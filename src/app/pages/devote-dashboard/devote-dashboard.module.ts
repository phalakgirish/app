import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevoteDashboardPageRoutingModule } from './devote-dashboard-routing.module';

import { DevoteDashboardPage } from './devote-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevoteDashboardPageRoutingModule
  ],
  declarations: [DevoteDashboardPage]
})
export class DevoteDashboardPageModule {}
