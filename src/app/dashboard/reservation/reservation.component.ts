import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

 
  listreservations: Reservation[] = [];
 
  constructor(private reservationService: ReservationService,
    private toastr: ToastrService) { }
    
  ngOnInit(): void {
    this.getReservation();
  }

  getReservation(){
    this.reservationService.getReservationList().subscribe(data =>{
      console.log(data);
      this.listreservations = data;
    }, error =>{
      console.log(error);
    })
  }



  
  deleteReservation(id:any){
    this.reservationService.deleteReservation(id).subscribe(data =>{
    this.toastr.error('Réservation est supprimer avec succès','Réservation Supprimer' );
    this.getReservation();
    }, error =>{
      console.log(error);
    })
  }


}
