import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quest2Page } from './quest2.page';

const routes: Routes = [
  {
    path: '',
    component: Quest2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quest2PageRoutingModule {}
