import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})

export class OrderService{

    cliente:any;
    carritoProductos:any[]=[];

    constructor(private cartS:CartService){

    this.carritoProductos=this.cartS.obtenerCarrito()    
    
    }

    setCliente(cliente:{}){

        this.cliente=cliente;

    }

    getCliente(){

      return this.cliente;

    }

}