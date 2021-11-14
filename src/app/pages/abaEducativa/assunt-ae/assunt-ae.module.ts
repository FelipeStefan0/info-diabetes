import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssuntAEPageRoutingModule } from './assunt-ae-routing.module';

import { AssuntAEPage } from './assunt-ae.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssuntAEPageRoutingModule,
    ],
  declarations: [AssuntAEPage]
})
export class AssuntAEPageModule {}
