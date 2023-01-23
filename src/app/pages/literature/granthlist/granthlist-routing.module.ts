import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GranthlistPage } from './granthlist.page';

const routes: Routes = [
  {
    path: '',
    component: GranthlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GranthlistPageRoutingModule {}
