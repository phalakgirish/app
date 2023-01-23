import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadstatusPageRoutingModule } from './readstatus-routing.module';

import { ReadstatusPage } from './readstatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadstatusPageRoutingModule
  ],
  declarations: [ReadstatusPage]
})
export class ReadstatusPageModule {}
