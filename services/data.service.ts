import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://2762-179-19-237-212.ngrok-free.app/api/productos'; 
  private serverUrl = 'https://2762-179-19-237-212.ngrok-free.app/api/detalle_producto';
  private loginUrl = 'https://2762-179-19-237-212.ngrok-free.app/api/clientes/login';
  private insertClienteUrl='https://2762-179-19-237-212.ngrok-free.app/registro_cliente';
  constructor(private http: HttpClient) { }

  // Método para obtener registros desde el servidor
  obtenerRegistros() {
    return this.http.post(`${this.apiUrl}`,"ficticio");
  }

  verPr(id_producto:String){
    const url = `${this.serverUrl}`;
    return this.http.post(url,id_producto);
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
