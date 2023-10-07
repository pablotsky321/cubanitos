import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/api/productos'; 
  private serverUrl = 'http://localhost:3000/api/productos'
  constructor(private http: HttpClient) { }

  // Método para obtener registros desde el servidor
  obtenerRegistros() {
    return this.http.get(`${this.apiUrl}`);
  }

  verPr(id_producto:String){
    const url = `${this.serverUrl}/${id_producto}`;
    return this.http.get(url);
  }

}
