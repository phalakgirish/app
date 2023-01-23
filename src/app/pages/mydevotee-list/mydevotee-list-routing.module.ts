import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MydevoteeListPage } from './mydevotee-list.page';

const routes: Routes = [
  {
    path: '',
    component: MydevoteeListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MydevoteeListPageRoutingModule {}
