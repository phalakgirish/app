import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MydevoteePage } from './mydevotee.page';

const routes: Routes = [
  {
    path: '',
    component: MydevoteePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MydevoteePageRoutingModule {}
