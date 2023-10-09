import { Component, OnInit } from '@angular/core';
import { CartService } from 'services/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit { 

  productos:any[]=[]

  constructor(private cartS:CartService) { }

  ngOnInit() {
    this.productos=this.cartS.obtenerCarrito();
  }

}
