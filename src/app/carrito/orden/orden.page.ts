import { Component, OnInit } from '@angular/core';
import { CartService } from 'services/cart.service';
import { ClientService } from 'services/client.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.page.html',
  styleUrls: ['./orden.page.scss'],
})
export class OrdenPage implements OnInit {

  ubicacion!:string;
  metodo_pago!:string;

  constructor(private cart:CartService,private cliente:ClientService) { }

  ngOnInit() {
  
  }

  realizarOrden(){}

}
