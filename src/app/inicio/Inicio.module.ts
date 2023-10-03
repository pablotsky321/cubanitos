import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InicioPage } from './Inicio.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { InicioPageRoutingModule } from './Inicio-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    InicioPageRoutingModule
  ],
  declarations: [InicioPage]
})
export class Tab1PageModule {}
