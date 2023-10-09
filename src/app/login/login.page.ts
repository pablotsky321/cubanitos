import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  correo!:string;
  clave!:string;
  resultado: any[]=[];

  constructor(private dataS:DataService,private rout:Router) { }
  
  login(){
    this.dataS.login_user(this.correo,this.clave).subscribe((data) => {
    this.resultado = data as any[];
    });

    if(this.resultado.length==0){
      alert('Correo o contraseña son incorrectos')
    }else{
      this.rout.navigate(['tabs/inicio'])
    }

  }
  
     
  ngOnInit() {
  }

}
