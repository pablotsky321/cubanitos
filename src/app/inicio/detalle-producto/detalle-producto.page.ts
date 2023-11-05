import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'services/cart.service';
import { DataService } from 'services/data.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {
  id_producto!: string;
  resultado: any;
  cantidad!: number;
  constructor(private route: ActivatedRoute, private dataService: DataService, private cartS: CartService, private router: Router, private alert: AlertController) { }

  ngOnInit() {
    const id_producto = this.route.snapshot.paramMap.get('id_producto');
    this.id_producto = id_producto !== null ? id_producto : '';

    this.dataService.verPr(this.id_producto).subscribe((data) => {
      this.resultado = data;
    });

  }

  volver() {
    this.router.navigate(['tabs/inicio']);
  }
  async presentAlert(titulo:string,mensaje:string) { 
    const alerta=await this.alert.create({
      header:titulo,
      message:mensaje,
      buttons:['Aceptar']
    });
 
    await alerta.present();

  }
  agregarCarrito() {
    if (this.cantidad > 0 && this.cantidad != null) {
      this.cartS.agregarProducto(this.resultado[0].id, this.cantidad, this.resultado[0].nombre, this.resultado[0].valor);
      this.presentAlert('Enhorabuena','Producto añadido con exito');
    }else{
      this.presentAlert('Error','Debe ingresar una cantidad');
    }
  }

}
