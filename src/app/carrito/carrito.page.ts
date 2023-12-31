import { Component, OnInit } from '@angular/core';
import { CartService } from 'services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit { 
  mostrarComponente: boolean = false;
  productos!:any;

  constructor(private cartS:CartService, private router:Router) { }

  ngOnInit() {
    this.actualizar()
  }

  actualizar(){
    this.productos=this.cartS.obtenerCarrito()
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

  realizarOrden(){

    this.router.navigate(['carrito/orden'])

  }

}
