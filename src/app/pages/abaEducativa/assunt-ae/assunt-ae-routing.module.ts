import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssuntAEPage } from './assunt-ae.page';

const routes: Routes = [
  {
    path: '',
    component: AssuntAEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssuntAEPageRoutingModule {}
