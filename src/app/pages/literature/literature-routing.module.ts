import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiteraturePage } from './literature.page';

const routes: Routes = [
  {
    path: '',
    component: LiteraturePage
  },
  {
    path: 'granthlist',
    loadChildren: () => import('./granthlist/granthlist.module').then( m => m.GranthlistPageModule)
  },
  {
    path: 'audio',
    loadChildren: () => import('./audio/audio.module').then( m => m.AudioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiteraturePageRoutingModule {}
