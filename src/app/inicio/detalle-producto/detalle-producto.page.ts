import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {
  id_producto!:string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  const id_producto=this.route.snapshot.paramMap.get('id_producto');
  this.id_producto=id_producto!== null ? id_producto : '';
  }

}
