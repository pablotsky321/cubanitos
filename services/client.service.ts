import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ClientService{

cliente:any;

    constructor(){}

setCliente(cliente:{}){

    this.cliente=cliente;

}

getCliente(){

    return this.cliente;

}

}