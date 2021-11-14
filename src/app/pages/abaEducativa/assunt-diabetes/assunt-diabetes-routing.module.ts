import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssuntDiabetesPage } from './assunt-diabetes.page';

const routes: Routes = [
  {
    path: '',
    component: AssuntDiabetesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssuntDiabetesPageRoutingModule {}
