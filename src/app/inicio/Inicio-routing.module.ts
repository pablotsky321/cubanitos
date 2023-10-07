import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPage } from './Inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage,
  },
  {
    path: 'detalle-producto/:id_producto',
    loadChildren: () => import('./detalle-producto/detalle-producto.module').then( m => m.DetalleProductoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioPageRoutingModule {}
