import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CartService } from 'services/cart.service';
import { DataService } from 'services/data.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {
  id_producto!:string;
  resultado:any;
  constructor(private route: ActivatedRoute,private dataService:DataService,private cartS:CartService,private router:Router) { }

  ngOnInit() {
  const id_producto=this.route.snapshot.paramMap.get('id_producto');
  this.id_producto=id_producto!== null ? id_producto : '';
  
  this.dataService.verPr(this.id_producto).subscribe((data) => {
    this.resultado = data;
  });

  }

  volver(){

    this.router.navigate(['tabs/inicio']);

  }

agregarCarrito(){

  this.cartS.agregarProducto(this.resultado[0]);

}

}
