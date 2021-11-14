import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerguntasPageRoutingModule } from './perguntas-routing.module';

import { PerguntasPage } from './perguntas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerguntasPageRoutingModule
  ],
  declarations: [PerguntasPage]
})
export class PerguntasPageModule {}
