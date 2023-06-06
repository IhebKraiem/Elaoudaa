import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http :HttpClient) { }

  apiUrl: string = 'http://localhost:3000/api';

 
  addClient( client: Client): Observable<any>{
    return this.http.post<Client>(`${this.apiUrl}/client/saveClient`, client);
   
  }
  obtenerClient(id:any): Observable<any>{
    return this.http.get<Client>(`${this.apiUrl}/client/getClients/`+ id);
  }
  getClient(): Observable<any> {
    return this.http.get<Client>(`${this.apiUrl}/client/findClients`);
  }
 
  
  eliminateClient(id: string): Observable<any>{
    return this.http.delete<Client>(`${this.apiUrl}/client/deleteClients/`+ id);
  }
  updateClient (id: any, newJou:any, imgJou: File): Observable<any>{
      const fd = new FormData();
      
      fd.append('name', newJou.name); 
      fd.append('lastname', newJou.lastname);
      fd.append('email', newJou.email)  ;   
      fd.append('age', newJou.age);
      fd.append('avatar', imgJou, imgJou.name);
      fd.append('telephone', newJou.telephone);
     
      
    return this.http.put<Client>(`${this.apiUrl}/client/updateClients/`+id ,fd);
  }

}
