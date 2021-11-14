import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssuntIGPageRoutingModule } from './assunt-ig-routing.module';

import { AssuntIGPage } from './assunt-ig.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssuntIGPageRoutingModule
  ],
  declarations: [AssuntIGPage]
})
export class AssuntIGPageModule {}
