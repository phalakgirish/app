import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MydevoteeListPageRoutingModule } from './mydevotee-list-routing.module';

import { MydevoteeListPage } from './mydevotee-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MydevoteeListPageRoutingModule
  ],
  declarations: [MydevoteeListPage]
})
export class MydevoteeListPageModule {}
