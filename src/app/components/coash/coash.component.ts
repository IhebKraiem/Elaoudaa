import { Component, OnInit } from '@angular/core';
import { Coash } from 'src/app/models/coash';

import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-coash',
  templateUrl: './coash.component.html',
  styleUrls: ['./coash.component.css']
})
export class CoashComponent implements OnInit {
  listEntraineur: Coash[]=[];
  constructor(private sc: ClientService) { }

  ngOnInit(): void {
    
  }
 
}
