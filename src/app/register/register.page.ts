import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  correo!:string
  nombres!:string
  apellidos!:string
  numero_celular!:string
  clave!:string
  confirmarClave!:string
  constructor(private dataS:DataService,private rout:Router) { }
  
  confirmaClave(){
    if (this.clave!=this.clave){
      alert('Las contraseñas no coinciden')
      return false
    }else{
      return true
    }
  }

  registro(){
    if (!this.confirmaClave()){
      alert('Las contraseñas no coinciden')
    }else{
      const cliente={correo:this.correo,nombres:this.nombres,apellidos:this.apellidos,telefono:this.numero_celular,clave:this.clave}
      this.dataS.create_user(cliente).subscribe((results)=>{
        console.log(results.toString)
      });
      this.rout.navigate(['/login'])
    }
  }

  ngOnInit() {
  
  }

}
