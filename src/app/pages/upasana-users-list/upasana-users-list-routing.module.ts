import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpasanaUsersListPage } from './upasana-users-list.page';

const routes: Routes = [
  {
    path: '',
    component: UpasanaUsersListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpasanaUsersListPageRoutingModule {}
