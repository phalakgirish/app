import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MygroupDevoteePageRoutingModule } from './mygroup-devotee-routing.module';

import { MygroupDevoteePage } from './mygroup-devotee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MygroupDevoteePageRoutingModule
  ],
  declarations: [MygroupDevoteePage]
})
export class MygroupDevoteePageModule {}
