import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'services/data.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {
  id_producto!:string;
  resultado:any;
  constructor(private route: ActivatedRoute,private dataService:DataService) { }

  ngOnInit() {
  const id_producto=this.route.snapshot.paramMap.get('id_producto');
  this.id_producto=id_producto!== null ? id_producto : '';
  
  this.dataService.verPr(this.id_producto).subscribe((data) => {
    this.resultado = data;
  });

  }

}
