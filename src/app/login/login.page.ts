import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'services/data.service';
import { ClientService } from 'services/client.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  correo!:string;
  clave!:string;
  resultado: any[]=[];

  constructor(private dataS:DataService,private rout:Router,private clientService:ClientService,private alertController:AlertController) { }
  
  login(){
    this.dataS.login_user({correo:this.correo,clave:this.clave}).subscribe((data) => {
    this.resultado = data as any[];
    if(this.resultado.length==0){
      this.mostrarDialogo()
    }else{
      this.rout.navigate(['/tabs'])
      this.clientService.setCliente(this.resultado[0]);
    }
    });
  }

  regist(){
    this.rout.navigate(['/register'])
  }
  
  async mostrarDialogo() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Correo o contraseña inválidos.',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
          }
        }
      ]
    });
  
    await alert.present();
  }
     
  ngOnInit() {
  }

}
