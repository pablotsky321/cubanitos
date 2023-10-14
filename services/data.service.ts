import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url='http://localhost:3000';
  constructor(private http: HttpClient) { }

  // Método para obtener registros desde el servidor
  obtenerRegistros() {
    return this.http.post(`${this.url}/api/productos`,"");
  }

  verPr(id_producto:String){
    const url = `${this.url}/api/productos/${id_producto}`;
    return this.http.post(url,"");
  }

  login_user(cliente:{}){
    const url=`${this.url}/api/clientes/login`;
    return this.http.post(url,cliente);
  }

  create_user(cliente:{}){
    const url=`${this.url}/registro_cliente`
    return this.http.post(url,cliente)
  }

}
