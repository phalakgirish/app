import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpasanaAddDevoteePage } from './upasana-add-devotee.page';

const routes: Routes = [
  {
    path: '',
    component: UpasanaAddDevoteePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpasanaAddDevoteePageRoutingModule {}
