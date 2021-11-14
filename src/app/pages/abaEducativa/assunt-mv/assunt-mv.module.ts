import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssuntMVPageRoutingModule } from './assunt-mv-routing.module';

import { AssuntMVPage } from './assunt-mv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssuntMVPageRoutingModule
  ],
  declarations: [AssuntMVPage]
})
export class AssuntMVPageModule {}
