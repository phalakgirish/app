import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpsanaUpcommingPageRoutingModule } from './upsana-upcomming-routing.module';

import { UpsanaUpcommingPage } from './upsana-upcomming.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpsanaUpcommingPageRoutingModule
  ],
  declarations: [UpsanaUpcommingPage]
})
export class UpsanaUpcommingPageModule {}
