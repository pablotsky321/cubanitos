import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'services/data.service';
import { Injectable } from '@angular/core';
import { collection, addDoc } from "firebase/firestore"; 
import { firebaseConfig } from '../firebaseConfig';


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
  constructor(private dataS:DataService,private rout:Router,private app:firebaseConfig) { }
  
  confirmaClave(){
    if (this.clave!=this.confirmarClave){
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
      try{
      let cliente={correo:this.correo,nombres:this.nombres,apellidos:this.apellidos,telefono:this.numero_celular,clave:this.clave}
      this.dataS.create_user(cliente).subscribe((results)=>{
        console.log(results.toString)
      });
      this.rout.navigate(['/login'])
    }catch(Exception){

      console.log(Exception)

    }
    }
  }

  ngOnInit() {
  
  }

}
