import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpasanaListPageRoutingModule } from './upasana-list-routing.module';

import { UpasanaListPage } from './upasana-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpasanaListPageRoutingModule
  ],
  declarations: [UpasanaListPage]
})
export class UpasanaListPageModule {}
