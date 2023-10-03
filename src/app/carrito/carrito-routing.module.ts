import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarritoPage } from './carrito.page';

const routes: Routes = [
  {
    path: '',
    component: CarritoPage
  },
  {
    path: 'orden',
    loadChildren: () => import('./orden/orden.module').then( m => m.OrdenPageModule)
  },
  {
    path: 'orden',
    loadChildren: () => import('./orden/orden.module').then( m => m.OrdenPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarritoPageRoutingModule {}
