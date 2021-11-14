import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssuntDiabetesPageRoutingModule } from './assunt-diabetes-routing.module';

import { AssuntDiabetesPage } from './assunt-diabetes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssuntDiabetesPageRoutingModule
  ],
  declarations: [AssuntDiabetesPage]
})
export class AssuntDiabetesPageModule {}
