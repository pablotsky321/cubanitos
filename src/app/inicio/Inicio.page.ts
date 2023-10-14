import { Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from 'services/data.service';
import { Router } from '@angular/router';
import { ClientService } from 'services/client.service';
@Component({
  selector: 'app-Inicio',
  templateUrl: 'Inicio.page.html',
  styleUrls: ['Inicio.page.scss']
})

export class InicioPage implements OnInit {
  
  registros: any[]=[]; 
  constructor(private dataService: DataService,private router:Router,private cl:ClientService) { }

  ver_producto(id_producto:String) {
    this.router.navigate(['inicio/detalle-producto',id_producto]);
  }

  ngOnInit() {
    this.dataService.obtenerRegistros().subscribe(data => {
      this.registros = data as any[];
      console.log(this.cl.getCliente())
    });
  }

}
