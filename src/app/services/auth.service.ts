import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Reset } from '../models/reset';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = 'http://localhost:3000/api';
  constructor(private http :HttpClient, private router:Router ) { }

  login(user: User): Observable<any> {
    return this.http.post<User>(`${this.apiUrl}/user/signin`, user)
    .pipe(map(user => {
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }));
      
  }
  //Function to access the token stored in the local storage   
getCurrentUser() {
  const user_string = localStorage.getItem('user');
  const user = JSON.parse(user_string || '{}');
  return user;
}

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
  
obteneruser(id:any): Observable<any>{
  return this.http.get<User>(`${this.apiUrl}/user/getUsers/`+ id);
}

updateUser (id: any, newJou:any, imgJou: File): Observable<any>{
  const fd = new FormData();
  
  fd.append('username', newJou.username);
  fd.append('email', newJou.email)  ;   
  fd.append('avatar', imgJou, imgJou.name);

return this.http.put<User>(`${this.apiUrl}/user/updateUser/`+id ,fd);
}
   isAuthenticated(): boolean{
     return localStorage.getItem('user')!=null;
   }
   requestReset(body:any):Observable<any> {
    return this.http.post(`${this.apiUrl}/user/req-reset-password`, body)

   }
   
   ValidPasswordToken( body:any):Observable<any> {
    return this.http.post(`${this.apiUrl}/user/valid-password-token`,body)
   }

   newPassword(body:any):Observable<any> {
    return this.http.post(`${this.apiUrl}/user/new-password`, body)
   }
}




