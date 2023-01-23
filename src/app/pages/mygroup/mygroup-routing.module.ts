import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MygroupPage } from './mygroup.page';

const routes: Routes = [
  {
    path: '',
    component: MygroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MygroupPageRoutingModule {}
