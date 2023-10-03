import { Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from 'services/data.service';
@Component({
  selector: 'app-Inicio',
  templateUrl: 'Inicio.page.html',
  styleUrls: ['Inicio.page.scss']
})

export class InicioPage implements OnInit {

  registros: any[]=[]; // Variable para almacenar los registros
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.obtenerRegistros().subscribe(data => {
      this.registros = data as any[];
    });
  }

}
