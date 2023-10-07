import { Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from 'services/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-Inicio',
  templateUrl: 'Inicio.page.html',
  styleUrls: ['Inicio.page.scss']
})

export class InicioPage implements OnInit {
  
  registros: any[]=[]; // Variable para almacenar los registros
  constructor(private dataService: DataService,private router:Router) { }

  ver_producto(id_producto:String) {
    this.router.navigate(['inicio/detalle-producto',id_producto]);
  }

  ngOnInit() {
    this.dataService.obtenerRegistros().subscribe(data => {
      this.registros = data as any[];
    });

  }

}
