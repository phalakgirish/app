import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MygroupDevoteePage } from './mygroup-devotee.page';

const routes: Routes = [
  {
    path: '',
    component: MygroupDevoteePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MygroupDevoteePageRoutingModule {}
