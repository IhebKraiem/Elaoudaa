import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Shopcategorie } from 'src/app/models/shopcategorie';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.css']
})
export class EditCategorieComponent implements OnInit {
  id: string | null;
   constructor(private router: Router,
    private toastr: ToastrService,
    private _productService: ProductService,
    private aRouter: ActivatedRoute) {
      this.id = this.aRouter.snapshot.paramMap.get('id')
     }
     catForm: Shopcategorie = {
      _id: '',
      name: '',
      
    };
  ngOnInit(): void {
    this.getProductByID()
  }
  getProductByID(): void {
    if (this.id !== null) {
      this._productService.getCatégorie(this.id).subscribe(data =>{
        this.catForm= data;
        console.log(data);
      },
      error => {
        console.log(error);
      }); 
    }
  }

  updateCategorie(): void {
      this._productService.updateCat(this.catForm._id,this.catForm).subscribe(data =>{
        this.router.navigate(["/categorie"]);
        console.log(data);
        this.toastr.info('Catégorie modifier avec succès!', 'Catégorie Modifier!!');
       
      }, error =>{
        console.log(error);
        });
  }

}
