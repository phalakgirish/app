import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { UpsanaRegistrationPageRoutingModule } from './upsana-registration-routing.module';

import { UpsanaRegistrationPage } from './upsana-registration.page';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    UpsanaRegistrationPageRoutingModule
  ],
  declarations: [UpsanaRegistrationPage]
})
export class UpsanaRegistrationPageModule {}
