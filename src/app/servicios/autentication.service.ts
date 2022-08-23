import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {
  
  constructor(private http:HttpClient) {
    /*AGREGAR URL Y ETC, MASTER CLASS MINUTO 27*/
   }
}
