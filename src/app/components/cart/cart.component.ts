import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/models/client';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  currentUser!: Client;
  carts: any;
  cartDetails: any;
  product!: Product;
  constructor(private _cartService: CartService,
    private toastr: ToastrService,
    private auth: AuthService) {this.currentUser =  this.auth.getCurrentUser().user; }

    _getCart(): void {
      this._cartService.getCartItems(this.currentUser._id).subscribe((data: any) => {
        this.carts = data.data;
        // this.cartDetails = data.data;
        console.log(this.carts);
      });
    }
  _increamentQTY(id: any, quantity: any): void {
    const payload = {
      productId: id,
      quantity,
    };
    this._cartService.increaseQty(payload).subscribe(() => {
      this._getCart();
      this.toastr.success('Produit Ajouter avec succès ', 'Ajouter Produit !!');
    });
  }
 

  _emptyCart(): void {
    this._cartService.emptyCart().subscribe(() => {
      this._getCart();
      this.toastr.error('Tout les produit de Panier supprimer ', 'Supprimer Panier !!');
    });
  }
 delete(id: any) {
    this._cartService.deleteItem(id).subscribe(() => {
      this.toastr.error('Produit Supprimer avec succès ', 'Supprimer Produit !!');    
      this._getCart();
    });

  }

  ngOnInit(): void {
    this._getCart();
  }

}
