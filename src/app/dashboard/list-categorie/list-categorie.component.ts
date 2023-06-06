import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Shopcategorie } from 'src/app/models/shopcategorie';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {
listCategorie: Shopcategorie[] = [];
name : any;
p: any;
  constructor(private _productService: ProductService ,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerCatégorie();
  }
  obtenerCatégorie(){
    this._productService.getShopcategorie().subscribe(data =>{
      console.log(data);
      this.listCategorie = data;
    }, error =>{
      console.log(error);
    })
  }
  deleteCategorie(id:any){
    this._productService.eliminateCat(id).subscribe(data =>{
    this.toastr.error('Catégorie est supprimer avec succès','Catégorie Supprimer' );
    this.obtenerCatégorie();
    }, error =>{
      console.log(error);
    })
  }
  Search(){
    if(this.name ==""){
      this.ngOnInit();
    }else{
      this.listCategorie = this.listCategorie.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }
}
