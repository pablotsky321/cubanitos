import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdenActualPage } from './orden-actual.page';

const routes: Routes = [
  {
    path: '',
    component: OrdenActualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdenActualPageRoutingModule {}
