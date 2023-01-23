import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GranthlistPageRoutingModule } from './granthlist-routing.module';

import { GranthlistPage } from './granthlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GranthlistPageRoutingModule
  ],
  declarations: [GranthlistPage]
})
export class GranthlistPageModule {}
