import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Shopcategorie } from 'src/app/models/shopcategorie';
import { ProductService } from 'src/app/services/product.service';
import { AuthService} from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { Client } from 'src/app/models/client';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  listProduct: Product[] = [];
  listProduct1: Product[] = [];
  id!: any ;
  products: Product[]=[];
  categorys: Shopcategorie[]=[];
  p:any;
  currentUser!: Client;

  constructor(private _productService: ProductService ,
    private _cartService: CartService ,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private auth: AuthService) {
      this.currentUser =  this.auth.getCurrentUser().user;
    }

  ngOnInit(): void {
    this.obtenerProducts();
    this.id = this.route.snapshot.paramMap.get('id');    
    this.listProductsByCategory(this.id);
    this.listCategory();
   
    this.Sanscategorie();
  }

  obtenerProducts(){
    this._productService.getProduct().subscribe(data =>{
      console.log(data);
      this.listProduct = data;
    }, error =>{
      console.log(error);
    })
  }
  

  listProductsByCategory(id: any) {
    this._productService.findAllProductsByCategory(id).subscribe(
      (data) => {
        this.products = data.data;      
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  listCategory() {
    this._productService.getShopcategorie().subscribe(
      (data) => {
        this.categorys = data;      
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
 
  _addItemToCart(id:any, quantity:any): void {
    let payload = {
      productId: id,
      quantity,
    };
    this._cartService.addToCart(payload,this.currentUser._id).subscribe(() => {
      this.obtenerProducts();
      this.toastr.success('Ajouter produit au panier!', 'Produit Ajouter !!')
    });
  }
  Sanscategorie(){
    this._productService.sansCategorie().subscribe(data =>{
      console.log(data);
      this.listProduct1 = data;
    }, error =>{
      console.log(error);
    })
  }
  
  } 