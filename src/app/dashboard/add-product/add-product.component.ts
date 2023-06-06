import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { Shopcategorie } from 'src/app/models/shopcategorie';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public categorie!: Shopcategorie;
  listcategorie: Shopcategorie[]=[];
  cardtitle = 'Add a new Product';
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
    shopcategorie:''
  };
     message = '';
  ngOnInit(): void {
    
    this.obtenerCategorie();
  }

  loadImage(img: any) {
    this.image = img.target.files[0];
    console.log(this.image);
  }
  

  addProduct() {
    
    
        //add product
        console.log(this.productForm);
        this._productService.addProduct(this.productForm, this.image).subscribe(data =>{
          this.router.navigate(["/products"]);
          this.toastr.success('Produit Ajouter avec succès ', 'Ajouter Produit !!');
         
        }, error =>{
          console.log(error);
        
        }) 
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
 

