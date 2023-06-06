import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

    apiUrl='http://localhost:3000/api';
    
  
    constructor(private http: HttpClient) { }
    
    getContact(): Observable<any> {
      return this.http.get<Contact>(`${this.apiUrl}/contact/findContacts`);
    }
    eliminateContact(id: string): Observable<any>{
      return this.http.delete<Contact>(`${this.apiUrl}/contact/deleteContacts/`+ id);
    }
    addContact( contact: Contact): Observable<any>{
      return this.http.post<Contact>(`${this.apiUrl}/contact/saveContact`, contact);
    }
  }
    
