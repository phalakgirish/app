import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevoteDashboardPage } from './devote-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DevoteDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevoteDashboardPageRoutingModule {}
