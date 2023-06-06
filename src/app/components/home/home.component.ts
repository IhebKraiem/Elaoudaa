import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news : News[] = [];

  constructor(private _NewsService: NewsService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(){
    this._NewsService.getNews().subscribe(data =>{
      console.log(data);
      this.news = data;
    }, error =>{
      console.log(error);
    })  
  }


}
