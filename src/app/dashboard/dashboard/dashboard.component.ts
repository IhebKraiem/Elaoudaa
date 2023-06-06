import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { Product } from 'src/app/models/product';
import { Reservation } from 'src/app/models/reservation';
import { ClientService } from 'src/app/services/client.service';
import { ProductService } from 'src/app/services/product.service';
import { ReservationService } from 'src/app/services/reservation.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private serviceClient:ClientService,private commandeService:ReservationService,private produitService:ProductService) { }
  listclient:Client[]=[] ;
  listCommande:Reservation[]=[] ;
  listProduct:Product[]=[] ;

  ngOnInit(): void {
    this.serviceClient.getClient().subscribe(res=>{
      this.listclient=res
    })
    this.commandeService.getReservationList().subscribe(res=>{
      this.listCommande=res
    })
    this.produitService.getProduct().subscribe(res=>{
      this.listProduct=res
    })



  
}




}
