import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Shopcategorie } from 'src/app/models/shopcategorie';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {
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
  }

  ajouterCategorie() {
    console.log(this.catForm);
    this._productService.addcategorie(this.catForm).subscribe(data =>{
      this.router.navigate(["/categorie"]);
      this.toastr.success('Catégorie ajouter avec succés!', 'Ajoute Catégorie !!');
     
    }, error =>{
      console.log(error);
    
    }) 
}

}
