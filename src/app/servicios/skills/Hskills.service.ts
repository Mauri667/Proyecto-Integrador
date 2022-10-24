import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hskills } from 'src/app/model/hskills';

@Injectable({
  providedIn: 'root'
})
export class HSkillsService {

  URL = 'https://backmauri.herokuapp.com/hardskills/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Hskills[]> {
    return this.httpClient.get<Hskills[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Hskills> {
    return this.httpClient.get<Hskills>(this.URL + `detail/${id}`);
  }

  public save(hskill: Hskills): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', hskill);
  }

  public update(id: number, hskill: Hskills): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, hskill);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
