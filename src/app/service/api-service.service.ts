import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private baseUrl:string = environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  GetUsuario(): Observable<any> {
      return this.httpClient.get(`${this.baseUrl}/usuario`)
  }

  GetUsuarioById(id:number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/usuario/${id}`)
  }

  PostUser(usuario:any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/usuario`, usuario);
  }

  GetTareas(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/tarea`)
  }
  GetTareaId(id:number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/tarea/${id}`)
  }
  GetTareaByUsuario(id:number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/tarea/byuser/${id}`)
  }

  CreateTarea(tarea:any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/tarea`, tarea)
  }
  Update(Tareaid:number, tarea:any): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/tarea/${Tareaid}`, tarea)
  }
  DeleteTarea(id:number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/tarea/${id}`)
  }

}
