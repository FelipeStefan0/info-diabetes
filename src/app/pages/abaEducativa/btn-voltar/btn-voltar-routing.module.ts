import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BtnVoltarPage } from './btn-voltar.page';

const routes: Routes = [
  {
    path: '',
    component: BtnVoltarPage,
    children: [
      {
        path: 'tab3',
        loadChildren: () => import('../../../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'assunt-ae',
        loadChildren: () => import('../assunt-ae/assunt-ae.module').then(m => m.AssuntAEPageModule)
      },
      {
        path: 'assunt-carb',
        loadChildren: () => import('../assunt-carb/assunt-carb.module').then(m => m.AssuntCarbPageModule)
      },
      {
        path: 'assunt-diabetes',
        loadChildren: () => import('../assunt-diabetes/assunt-diabetes.module').then(m => m.AssuntDiabetesPageModule)
      },
      {
        path: 'assunt-ig',
        loadChildren: () => import('../assunt-ig/assunt-ig.module').then(m => m.AssuntIGPageModule)
      },
      {
        path: 'assunt-mv',
        loadChildren: () => import('../assunt-mv/assunt-mv.module').then(m => m.AssuntMVPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BtnVoltarPageRoutingModule {}
