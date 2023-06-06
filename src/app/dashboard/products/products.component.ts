import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  listProduct: Product[] = [];
  p:any;
  name:any;

  constructor(private _productService: ProductService ,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerProducts();
    
  }

  obtenerProducts(){
    this._productService.getProduct().subscribe(data =>{
      console.log(data);
      this.listProduct = data;
    }, error =>{
      console.log(error);
    })
  }
  eliminateProduct(id:any){
    this._productService.eliminateProduct(id).subscribe(data =>{
    this.toastr.error('Produit Supprimer avec succès ', 'Supprimer Produit !!' );
    this.obtenerProducts();
    }, error =>{
      console.log(error);
    })
  }
  Search(){
    if(this.name ==""){
      this.ngOnInit();
    }else{
      this.listProduct = this.listProduct.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }
  

}
