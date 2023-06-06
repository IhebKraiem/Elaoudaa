import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {
  cardtitle = 'Ajouter une nouvelle actualité';
  cardbutton = 'Ajouter Actualité';
  id: string | null;
  image!:any;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private _newsService: NewsService,
    private aRouter: ActivatedRoute) {
    
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }
  newsForm: News = {
    _id: '',
    date:'',
    title: '',
    newsToday: '',
    image: '',
    
  };

  ngOnInit(): void {
   this.isEdit();
  }

  loadImage(img: any) {
    this.image = img.target.files[0];
    console.log(this.image);
  }
  

  addNews() {
    // edit product
    if(this.id !== null){
   
      console.log(this.id);
      this._newsService.updateNews(this.newsForm._id,this.newsForm, this.image).subscribe(data =>{
        this.router.navigate(["/news"]);
        this.toastr.info('Actualiter Modifier !!');
       
      }, error =>{
        console.log(error);
      
      }) }
    else{
        //add product
        console.log(this.newsForm);
        this._newsService.addNews(this.newsForm,this.image).subscribe(data =>{
          this.router.navigate(["/news"]);
          this.toastr.success('Actualité ajouter !!');
         
        }, error =>{
          console.log(error);
        
        }) 
  }
}
isEdit() {
  if (this.id !== null) {
    this.cardtitle = 'Modifier actualité';
    this.cardbutton = 'Modifier actualité';
    this._newsService.obtenerNews(this.id).subscribe(data =>{
      this.newsForm= data;
      console.log(data);
    },
    error => {
      console.log(error);
    }); 
    }
  }
}
