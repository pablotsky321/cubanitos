import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://6933-2801-13-e800-200-70d6-5394-88d2-676a.ngrok-free.app/api/productos'; 
  private serverUrl = 'https://6933-2801-13-e800-200-70d6-5394-88d2-676a.ngrok-free.app/api/productos';
  private loginUrl = 'https://6933-2801-13-e800-200-70d6-5394-88d2-676a.ngrok-free.app/api/clientes/login';
  private insertClienteUrl='https://6933-2801-13-e800-200-70d6-5394-88d2-676a.ngrok-free.app/registro_cliente';
  constructor(private http: HttpClient) { }

  // Método para obtener registros desde el servidor
  obtenerRegistros() {
    return this.http.get(`${this.apiUrl}`);
  }

  verPr(id_producto:String){
    const url = `${this.serverUrl}/${id_producto}`;
    return this.http.get(url);
  }

  login_user(cliente:{}){
    const url=`${this.loginUrl}`;
    return this.http.post(url,cliente);
  }

  create_user(cliente:{}){
    const url=`${this.insertClienteUrl}`
    return this.http.post(url,cliente)
  }

}
