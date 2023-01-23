import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MygroupPageRoutingModule } from './mygroup-routing.module';

import { MygroupPage } from './mygroup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MygroupPageRoutingModule
  ],
  declarations: [MygroupPage]
})
export class MygroupPageModule {}
