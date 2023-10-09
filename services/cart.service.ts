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
}