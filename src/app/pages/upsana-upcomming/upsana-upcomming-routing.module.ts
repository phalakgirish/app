import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpsanaUpcommingPage } from './upsana-upcomming.page';

const routes: Routes = [
  {
    path: '',
    component: UpsanaUpcommingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpsanaUpcommingPageRoutingModule {}
