import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'services/data.service';
import { ClientService } from 'services/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  correo!:string;
  clave!:string;
  resultado: any[]=[];

  constructor(private dataS:DataService,private rout:Router,private clientService:ClientService) { }
  
  login(){
    this.dataS.login_user({correo:this.correo,clave:this.clave}).subscribe((data) => {
    this.resultado = data as any[];
    if(this.resultado.length==0){
      alert('Correo o contraseña son incorrectos')
    }else{
      this.rout.navigate(['/tabs'])
      this.clientService.setCliente(this.resultado[0]);
    }
    });
  }

  regist(){
    this.rout.navigate(['/register'])
  }
  
     
  ngOnInit() {
  }

}
