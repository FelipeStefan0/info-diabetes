import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestPageRoutingModule } from './quest-routing.module';

import { QuestPage } from './quest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestPageRoutingModule
  ],
  declarations: [QuestPage]
})
export class QuestPageModule {}
