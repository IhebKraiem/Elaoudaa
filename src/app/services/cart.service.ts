import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  apiUrl='http://localhost:3000/api';
  

  constructor(private http: HttpClient) { }

  addToCart(payload:any,id:any) {
    return this.http.post<Cart>(`${this.apiUrl}/panier/${id}`, payload);
  }

  getCartItems(id:any) {
    return this.http.get<Cart>(`${this.apiUrl}/panier/${id}`);
  }
  increaseQty(payload:any) {
    return this.http.post<Cart>(`${this.apiUrl}/panier/savePanier`, payload);
  }
  emptyCart() {
    return this.http.delete(`${this.apiUrl}/panier/empty-cart`);
  }
  deleteItem(id : any) {
    return this.http.delete(`${this.apiUrl}/panier/deleteItem/${id}`);
  }
  
}
