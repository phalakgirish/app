import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpsanaSearchNumberPage } from './upsana-search-number.page';

const routes: Routes = [
  {
    path: '',
    component: UpsanaSearchNumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpsanaSearchNumberPageRoutingModule {}
