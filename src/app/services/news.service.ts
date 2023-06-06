import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http :HttpClient) { }

  baseUrl= 'http://localhost:3000/api';

  addNews( newProd:any, imgProd: File): Observable<any>{
    const fd = new FormData();
    
    fd.append('title', newProd.title); 
    fd.append('date', newProd.date);
    fd.append('newsToday', newProd.newsToday);
    fd.append('image', imgProd, imgProd.name);
    return this.http.post<News>(`${this.baseUrl}/news/saveNews`, fd)
   
  }

  getNews(): Observable<any> {
    return this.http.get<News>(`${this.baseUrl}/news/findAllNews`);
  }


  deleteNews(id: string): Observable<any>{
    return this.http.delete<News>(`${this.baseUrl}/news/deleteNews/`+ id);
  }
  updateNews(id: string,newProd:any, imgProd: File) :Observable<any>{
    const fd = new FormData();
    
    fd.append('title', newProd.title); 
    fd.append('date', newProd.date);
    fd.append('newsToday', newProd.newsToday);
    fd.append('image', imgProd, imgProd.name);

    return this.http.put<News>(`${this.baseUrl}/news/updateNews/`+ id , fd);

  }
  obtenerNews(id:String): Observable<any>{
    return this.http.get<News>(`${this.baseUrl}/news/getNews/`+ id);
  }

}
