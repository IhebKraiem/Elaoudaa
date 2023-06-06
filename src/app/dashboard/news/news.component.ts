import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  listnews : News[] = [];
  title:any;
  p: any;
  constructor(private _NewsService: NewsService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getNews();
    
  }

  getNews(){
    this._NewsService.getNews().subscribe(data =>{
      console.log(data);
      this.listnews = data;
    }, error =>{
      console.log(error);
    })  
  }

  deleteNews(id:any){
    this._NewsService.deleteNews(id).subscribe(data =>{
    this.toastr.error('Actualité est supprimer avec succès','Actualité Supprimer' );
    this.getNews();
    }, error =>{
      console.log(error);
    })
  }
  Search(){
    if(this.title ==""){
      this.ngOnInit();
    }else{
      this.listnews = this.listnews.filter(res => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      })
    }
  }
}



