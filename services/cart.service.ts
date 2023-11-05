import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService{
    carrito: any[]=[]
    constructor(){}

    agregarProducto(id_producto:string,cantidad:any,nombre:string,valor:any){

      let valor_final=valor*cantidad
      this.carrito.push({"id":id_producto,"nombre":nombre,"valor_unitario":valor,"cantidad":cantidad,"valor":valor_final})

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