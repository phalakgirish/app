import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpsanaSearchNumberPageRoutingModule } from './upsana-search-number-routing.module';

import { UpsanaSearchNumberPage } from './upsana-search-number.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpsanaSearchNumberPageRoutingModule
  ],
  declarations: [UpsanaSearchNumberPage]
})
export class UpsanaSearchNumberPageModule {}
