import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpasanaListPage } from './upasana-list.page';

const routes: Routes = [
  {
    path: '',
    component: UpasanaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpasanaListPageRoutingModule {}
