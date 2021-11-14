import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quest2PageRoutingModule } from './quest2-routing.module';

import { Quest2Page } from './quest2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quest2PageRoutingModule
  ],
  declarations: [Quest2Page]
})
export class Quest2PageModule {}
