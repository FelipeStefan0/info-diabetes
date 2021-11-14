import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssuntCarbPageRoutingModule } from './assunt-carb-routing.module';

import { AssuntCarbPage } from './assunt-carb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssuntCarbPageRoutingModule
  ],
  declarations: [AssuntCarbPage]
})
export class AssuntCarbPageModule {}
