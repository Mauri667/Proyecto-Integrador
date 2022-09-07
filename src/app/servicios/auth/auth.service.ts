import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from 'src/app/model/jwt-dto';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.url + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.url+'login', loginUsuario);
  }

}
