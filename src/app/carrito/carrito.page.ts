import { Component, OnInit } from '@angular/core';
import { CartService } from 'services/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit { 
  mostrarComponente: boolean = false;
  productos:any[]=[]

  constructor(private cartS:CartService) { }

  ngOnInit() {
    this.productos=this.cartS.obtenerCarrito();
    this.actualizar()
  }

  actualizar(){
    if(this.productos.length>0){
      this.mostrarComponente=true
    }else{
      this.mostrarComponente=false
    }
  }

  eliminarP(id_producto:string){

    this.cartS.eliminarProducto(id_producto);
    this.actualizar()
  
  }

}
