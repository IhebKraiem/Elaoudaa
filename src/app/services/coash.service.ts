import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Coash } from '../models/coash';

@Injectable({
  providedIn: 'root'
})
export class CoashService {
  apiUrl='http://localhost:3000/api';
  

  constructor(private http: HttpClient) { }
  
  getCoash(): Observable<any> {
    return this.http.get<Coash>(`${this.apiUrl}/entreneur/findEntreneurs`)
    
  }
  
  eliminateCoash(id: string): Observable<any>{
    return this.http.delete<Coash>(`${this.apiUrl}/entreneur/deleteEntreneurs/`+ id)
    
  }
  addCoash(coash:any ,imgEnt: File ): Observable<any>{
    const fd = new FormData();
    fd.append('name', coash.name); 
    fd.append('lastname', coash.lastname);
    fd.append('email', coash.email)  ;   
    fd.append('avatar', imgEnt, imgEnt.name);
    return this.http.post<Coash>(`${this.apiUrl}/entreneur/saveEntreneur`, fd)
    
  }
  
  obtenerCoach(id:any): Observable<any>{
    return this.http.get<Coash>(`${this.apiUrl}/entreneur/getEntreneurs/`+ id)
    
  }
  updateCoash(id: string, coash:any ,imgEnt: File ): Observable<any>{
    const fd = new FormData();
    fd.append('name', coash.name); 
    fd.append('lastname', coash.lastname);
    fd.append('email', coash.email)  ;   
    fd.append('avatar', imgEnt, imgEnt.name);
    return this.http.put<Coash>(`${this.apiUrl}/entreneur/updateEntreneurs/`+ id, fd)
    
  }
  
}
