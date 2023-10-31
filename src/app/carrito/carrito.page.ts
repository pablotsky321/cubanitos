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


  constructor(private cartS:CartService, private router:Router) { }

  ngOnInit() {
    this.actualizar()
  }

  actualizar(){
    if(this.cartS.obtenerCarrito().length>0){
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
