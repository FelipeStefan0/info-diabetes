import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssuntCarbPage } from './assunt-carb.page';

const routes: Routes = [
  {
    path: '',
    component: AssuntCarbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssuntCarbPageRoutingModule {}
