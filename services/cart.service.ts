import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService{
    carrito: any[]=[]
    constructor(){}

    agregarProducto(producto:{}){

    this.carrito.push(producto)

    }

    obtenerCarrito(){

        return this.carrito

    }

    eliminarProducto(id_producto: string) {
      const index = this.carrito.findIndex((producto) => producto.id === id_producto);
      if (index !== -1) {
        this.carrito.splice(index, 1);
      }
    }
}