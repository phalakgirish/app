import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadstatusPage } from './readstatus.page';

const routes: Routes = [
  {
    path: '',
    component: ReadstatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadstatusPageRoutingModule {}
