import { Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from 'services/data.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  registros: any[]=[]; // Variable para almacenar los registros
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.obtenerRegistros().subscribe(data => {
      this.registros = data as any[];
    });
  }

}
