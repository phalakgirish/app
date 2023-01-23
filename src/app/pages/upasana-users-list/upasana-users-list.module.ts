import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpasanaUsersListPageRoutingModule } from './upasana-users-list-routing.module';

import { UpasanaUsersListPage } from './upasana-users-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpasanaUsersListPageRoutingModule
  ],
  declarations: [UpasanaUsersListPage]
})
export class UpasanaUsersListPageModule {}
