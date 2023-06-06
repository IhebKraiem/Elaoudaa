import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { Shopcategorie } from 'src/app/models/shopcategorie';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  public categorie!: Shopcategorie;
  listcategorie: Shopcategorie[]=[];
  
  
  id: string | null;
  image!:any;
  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _productService: ProductService,
    private aRouter: ActivatedRoute) {
    
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }
  
  productForm: Product = {
    _id: '',
    name: '',
    marque: '',
    description: '',
    price: 0,        
    image: '',
    shopcategorie:""
  };
     
  ngOnInit(): void {
    this.obtenerCategorie()
    this.getProductByID();
  }

  loadImage(img: any) {
    this.image = img.target.files[0];
    console.log(this.image);
  }
  getProductByID(): void {
    if (this.id !== null) {
      this._productService.obtenerProduct(this.id).subscribe(data =>{
        this.productForm= data;
        console.log(data);
      },
      error => {
        console.log(error);
      }); 
    }
  }

  updateProduit(): void {

      this._productService.updateProduct(this.productForm._id,this.productForm, this.image).subscribe(data =>{
        this.router.navigate(["/products"]);
        console.log(data);
        this.toastr.info('Produit Modifier avec succès ', 'Modifier Produit !!');
       
      }, error =>{
        console.log(error);
        });
  }
  obtenerCategorie(){
    this._productService.getShopcategorie().subscribe(data =>{
      console.log(data);
      this.listcategorie = data;
    }, error =>{
      console.log(error);
    })
  }
 
}
