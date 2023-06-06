import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,Observable } from 'rxjs';
import { Product } from '../models/product';
import { Shopcategorie } from '../models/shopcategorie';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl='http://localhost:3000/api';
  

  constructor(private http: HttpClient) { }
  
  getProduct(): Observable<any> {
    return this.http.get<Product>(`${this.apiUrl}/produit/findProduit`);
  }
  eliminateProduct(id: string): Observable<any>{
    return this.http.delete<Product>(`${this.apiUrl}/produit/deleteProduit/`+ id);
  }

  addProduct(newProd:any, imgProd: File): Observable<any> {
    const fd = new FormData();
    
    fd.append('name', newProd.name); 
    fd.append('marque', newProd.marque);
    fd.append('description', newProd.description)  ;   
    fd.append('price', newProd.price);
    fd.append('image', imgProd, imgProd.name);
    fd.append('shopcategorie', newProd.shopcategorie);
  
    return this.http.post<Product>(`${this.apiUrl}/produit/saveProduit`, fd);
  }
  addcategorie(catForm: Shopcategorie) : Observable<any> {
    return this.http.post<Shopcategorie>(`${this.apiUrl}/shopcategorie/saveShopcategorie`,catForm);

  }
  obtenerProduct(id:String): Observable<any>{
    return this.http.get<Product>(`${this.apiUrl}/produit/getProduit/`+ id);
  }

  updateProduct(id: any, newProd:any, imgProd: File): Observable<any>{
    const fd = new FormData();
    
    fd.append('name', newProd.name); 
    fd.append('marque', newProd.marque);
    fd.append('description', newProd.description)  ;   
    fd.append('price', newProd.price);
    fd.append('image', imgProd, imgProd.name);
    
    return this.http.put<Product>(`${this.apiUrl}/produit/updateProduit/`+ id, fd);
  }
  getShopcategorie() : Observable<any> {
    return this.http.get<Shopcategorie>(`${this.apiUrl}/shopcategorie/findShopcategorie`);

  }
  findAllProductsByCategory(id:any): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/produit/getProductBCat/${id}`);
  
  }
  sansCategorie(): Observable<any> {
    return this.http.get<Product>(`${this.apiUrl}/produit/sansCategorie`);
  }
  
  getCatégorie(id:String): Observable<any>{
    return this.http.get<Shopcategorie>(`${this.apiUrl}/shopcategorie/getShopcategorie/`+ id);
  }
  updateCat(id:String,catForm: Shopcategorie): Observable<any>{
    return this.http.put<Shopcategorie>(`${this.apiUrl}/shopcategorie/updateShopcategorie/`+ id,catForm);
  }
  eliminateCat(id:String): Observable<any>{
    return this.http.delete<Shopcategorie>(`${this.apiUrl}/shopcategorie/deleteShopcategorie/`+ id);
  }
  
}
