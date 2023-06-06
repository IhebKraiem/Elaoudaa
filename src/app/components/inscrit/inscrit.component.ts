import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { Coash } from 'src/app/models/coash';

import { Client } from 'src/app/models/client';

import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-inscrit',
  templateUrl: './inscrit.component.html',
  styleUrls: ['./inscrit.component.css']
})
export class InscritComponent implements OnInit {

  public entreneur!: Coash;
  listEntraineur: Coash[]=[];
  submitted = false;
  registerForm: FormGroup;
  passwordValid = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/";
  constructor(private sc:  ClientService,
     public formBuilder: FormBuilder,
      private router: Router) {
        
    this.registerForm = this.formBuilder.group({
     
    name:['',Validators.required],
    lastname: ['',Validators.required],
    email: ['',Validators.required],
    password:['', [Validators.required, Validators.pattern(this.passwordValid)]],   
    age: ['',Validators.required],
    telephone: ['',Validators.required],   
    //sexe: ['',Validators.required], 
    //entreneur: this.entreneur
    })
  }
  get f() { return this.registerForm.controls; }
  ngOnInit(): void {
    
  }

  onSubmit() {
      const Client: Client = {
       name: this.registerForm.get("name")?.value,
       lastname: this.registerForm.get("lastname")?.value,
       email: this.registerForm.get("email")?.value,
       password: this.registerForm.get("password")?.value,
       age: this.registerForm.get("age")?.value,
       telephone: this.registerForm.get("telephone")?.value,
       //sexe: this.registerForm.get("sexe")?.value,       
       //entreneur: this.registerForm.get("entreneur")?.value
      }
  
  console.log(Client);
      var client = this.sc.addClient(Client).subscribe();
      if(client){
        
              this.router.navigate(['/login']);          
        
      }else console.log("wrong data")
    }

    
  }


  
//   listEntraineur: Coash[]=[];
//   submitted = false;
 
//   constructor(private sc:  JoueurService,
   
//     private toastr: ToastrService,
//      public formBuilder: FormBuilder,
//       private router: Router,
//       private aRouter: ActivatedRoute) {
    
//   }
//   passwordValid = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/";
//   joueurForm: Joueur = {
//     _id: '',
//     name:"",
//     lastname: "",
//     //avatar: ['',Validators.required],
//     email: "",
//     password: ['', [Validators.required, Validators.pattern(this.passwordValid)]],    
//     age: "",
//     telephone: "",   
//     sexe:"", 
//     entreneur:"",
//     role:""
//   };
//   ngOnInit(): void {
//     this. obtenerEntreneur();
//   } 

//   onSubmit() { 
//       //add product
//       console.log(this.joueurForm);
//       this.sc.addJoueur(this.joueurForm).subscribe(data =>{
//         this.router.navigate(["/home"]);
//         this.toastr.success('You are successfully registered!', 'Registered Joueur !!');
       
//       }, error =>{
//         console.log(error);
      
//       }) 
// }
    
   

