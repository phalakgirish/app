import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MydevoteePageRoutingModule } from './mydevotee-routing.module';

import { MydevoteePage } from './mydevotee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MydevoteePageRoutingModule
  ],
  declarations: [MydevoteePage]
})
export class MydevoteePageModule {}
