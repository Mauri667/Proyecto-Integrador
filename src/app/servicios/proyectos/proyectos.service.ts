import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  URL = 'https://backmauri.herokuapp.com/proyectos/';

  constructor(private httpClient:HttpClient) {}

  public lista(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Proyectos> {
    return this.httpClient.get<Proyectos>(this.URL + `detail/${id}`);
  }

  public save(Proyectos: Proyectos): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', Proyectos);
  }

  public update(id: number, Proyectos: Proyectos): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, Proyectos);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
