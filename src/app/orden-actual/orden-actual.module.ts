import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdenActualPageRoutingModule } from './orden-actual-routing.module';

import { OrdenActualPage } from './orden-actual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdenActualPageRoutingModule
  ],
  declarations: [OrdenActualPage]
})
export class OrdenActualPageModule {}
