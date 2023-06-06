import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation';
import { Terrain } from '../models/terrain';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  apiUrl='http://localhost:3000/api';
  constructor(private http: HttpClient) { }
  
  getTerrain(): Observable<any>{
    return this.http.get<Terrain[]>(`${this.apiUrl}/terrain/findAllTerrain`);
  }

  addReservation(reservation:Reservation ,id: string): Observable<any> {
    return this.http.post<Reservation>(`${this.apiUrl}/reservation/saveReservation`, reservation);
  }

  getReservation(): Observable<any>{
    return this.http.get<Reservation>(`${this.apiUrl}/reservation/getReservation`);
  }

  getReservationList(): Observable<any>{
    return this.http.get<Reservation[]>(`${this.apiUrl}/reservation/getReservationList`);
  }

  

  getReservationById(id: any): Observable<any>{
    return this.http.get<Reservation>(`${this.apiUrl}/reservation/getReservationById/`+ id);
  }

  updateReservation(id: any, newProd:any, ): Observable<any>{
    const fd = new FormData();
    
    fd.append('dateReservation', newProd.dateReservation); 
    fd.append('heureDebut', newProd.heureDebut);
    fd.append('heureFin', newProd.heureFin)  ;   
    fd.append('terrain', newProd.terrain)  ;   

  
    
    return this.http.put<Reservation>(`${this.apiUrl}/reservation/updateReservation/`+ id, fd);
  }


  deleteReservation(id: string): Observable<any>{
    return this.http.delete<Reservation>(`${this.apiUrl}/reservation/deleteReservation/`+ id);
  }

  getReservationByClient(Client: string): Observable<any>{
    return this.http.get<Reservation>(`${this.apiUrl}/reservation/`+ Client);
  }




}