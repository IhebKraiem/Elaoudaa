import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  listProduct!: Product;
  //id: string | null;
  constructor( private _productService: ProductService,
    private route: ActivatedRoute) { 
  
  }

  ngOnInit(): void { 
    this.obtenerProducts(this.route.snapshot.paramMap.get('id'));
  }
  obtenerProducts(id:any){

    this._productService.obtenerProduct(id).subscribe(data =>{
      console.log(data);
      this.listProduct = data;
    }, error =>{
      console.log(error);
    })
  }
}

