import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssuntMVPage } from './assunt-mv.page';

const routes: Routes = [
  {
    path: '',
    component: AssuntMVPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssuntMVPageRoutingModule {}
