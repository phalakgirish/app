import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpasanaAddDevoteePageRoutingModule } from './upasana-add-devotee-routing.module';

import { UpasanaAddDevoteePage } from './upasana-add-devotee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UpasanaAddDevoteePageRoutingModule
  ],
  declarations: [UpasanaAddDevoteePage]
})
export class UpasanaAddDevoteePageModule {}
