import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssuntIGPage } from './assunt-ig.page';

const routes: Routes = [
  {
    path: '',
    component: AssuntIGPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssuntIGPageRoutingModule {}
