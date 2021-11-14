import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'loader',
    pathMatch:'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'assunt-diabetes',
    loadChildren: () => import('./pages/abaEducativa/assunt-diabetes/assunt-diabetes.module').then( m => m.AssuntDiabetesPageModule)
  },
  {
    path: 'assunt-ae',
    loadChildren: () => import('./pages/abaEducativa/assunt-ae/assunt-ae.module').then( m => m.AssuntAEPageModule)
  },
  {
    path: 'assunt-ig',
    loadChildren: () => import('./pages/abaEducativa/assunt-ig/assunt-ig.module').then( m => m.AssuntIGPageModule)
  },
  {
    path: 'assunt-carb',
    loadChildren: () => import('./pages/abaEducativa/assunt-carb/assunt-carb.module').then( m => m.AssuntCarbPageModule)
  },
  {
    path: 'assunt-mv',
    loadChildren: () => import('./pages/abaEducativa/assunt-mv/assunt-mv.module').then( m => m.AssuntMVPageModule)
  },
  {
    path: 'quest',
    loadChildren: () => import('./pages/quest/quest.module').then( m => m.QuestPageModule)
  },
  {
    path: 'quest2',
    loadChildren: () => import('./pages/quest2/quest2.module').then( m => m.Quest2PageModule)
  },
  {
    path: 'btn-voltar',
    loadChildren: () => import('./pages/abaEducativa/btn-voltar/btn-voltar.module').then( m => m.BtnVoltarPageModule)
  },
  {
    path: 'perguntas',
    loadChildren: () => import('./pages/abaEducativa/perguntas/perguntas.module').then( m => m.PerguntasPageModule)
  },
  {
    path: 'tab6',
    loadChildren: () => import('./tab6/tab6.module').then( m => m.Tab6PageModule)
  },
  {
    path: 'tab7',
    loadChildren: () => import('./tab7/tab7.module').then( m => m.Tab7PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
