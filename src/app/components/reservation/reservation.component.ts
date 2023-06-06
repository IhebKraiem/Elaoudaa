import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/models/client';
import { Reservation } from 'src/app/models/reservation';

import { AuthService } from 'src/app/services/auth.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  
  reservationForm:FormGroup;
  
  listReservation: Reservation[] = [];
  
  public client!: Client;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _ReservationService: ReservationService,
    private _AuthService: AuthService,
  ) {
    this.reservationForm = this.fb.group({
      nomcm: [''],
      qcm: [0],
      numtel: [0,[Validators.required,Validators.minLength(8)]],
      desc: [''],
      client:['',Validators.required]
  
    });
  }
  
  ngOnInit(): void {
 
    this.client = this._AuthService.getCurrentUser().user;
    this.reservationByClient(this.client._id);
    this.reservationForm.patchValue({
      client: this.client
    });
  }
  
  addReservation() {
    console.log(this.client);
    console.log(this.reservationForm);
    this._ReservationService.addReservation(this.reservationForm.value,this.client._id).subscribe(
      data => {
        
        console.log(data)
        this.listReservation.push(data)
        if ( this.reservationForm.invalid){
          this.toastr.error( 'Vouiller verifier vous champs');

        }
        else{
         this.router.navigate(["/reservation"]);
         this.toastr.success('Reservation ajouté');}
         
       
        },(err) => {
        console.log(err);
      }
    )
    
    
  } 

  reservationByClient(id: any) {
    this._ReservationService.getReservationByClient(id).subscribe(
        (data) => {
          this.listReservation = data.data;      
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
    }

    afficherReservation(){
      this._ReservationService.getReservation().subscribe(data =>{
        console.log(data);
        this.listReservation = data;
      }, error =>{
        console.log(error);
      })
    }

    annulerReservation(id:any){
      this._ReservationService.deleteReservation(id).subscribe(data =>{
        this.router.navigate(["/reservation"]);
        console.log(data);
     this.toastr.error('Commande supprimé' );

    this.reservationByClient(id);
      }, error =>{
       console.log(error);
     })
  }


}
