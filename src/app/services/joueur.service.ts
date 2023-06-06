import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Coash} from '../models/coash';
import { Joueur } from '../models/joueur';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  constructor(private http :HttpClient) { }

  apiUrl: string = 'http://localhost:3000/api';

  getEntreneur() : Observable<any> {
    return this.http.get<Coash>(`${this.apiUrl}/entreneur/findEntreneurs`);
  }
  addJoueur( joueur: Joueur): Observable<any>{
    return this.http.post<Joueur>(`${this.apiUrl}/joueur/saveJoueur`, joueur);
   
  }
  obtenerJoueur(id:any): Observable<any>{
    return this.http.get<Joueur>(`${this.apiUrl}/joueur/getJoueurs/`+ id);
  }
  getJoueur(): Observable<any> {
    return this.http.get<Joueur>(`${this.apiUrl}/joueur/findJoueurs`);
  }
  eliminateJoueur(id: string): Observable<any>{
    return this.http.delete<Joueur>(`${this.apiUrl}/joueur/deleteJoueurs/`+ id);
  }
  updateJoueur (id: any, newJou:any, imgJou: File): Observable<any>{
      const fd = new FormData();
      
      fd.append('name', newJou.name); 
      fd.append('lastname', newJou.lastname);
      fd.append('email', newJou.email)  ;   
      fd.append('age', newJou.age);
      fd.append('avatar', imgJou, imgJou.name);
      fd.append('telephone', newJou.telephone);
      fd.append('sexe', newJou.sexe);
      
    return this.http.put<Joueur>(`${this.apiUrl}/joueur/updateJoueurs/`+id ,fd);
  }

}
