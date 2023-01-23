import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiteraturePageRoutingModule } from './literature-routing.module';

import { LiteraturePage } from './literature.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiteraturePageRoutingModule
  ],
  declarations: [LiteraturePage]
})
export class LiteraturePageModule {}
