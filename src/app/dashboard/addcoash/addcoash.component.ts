import { Component, OnInit } from '@angular/core';
import { FormBuilder, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Coash } from 'src/app/models/coash';
import { CoashService } from 'src/app/services/coash.service';



@Component({
  selector: 'app-addcoash',
  templateUrl: './addcoash.component.html',
  styleUrls: ['./addcoash.component.css']
})
export class AddcoashComponent implements OnInit {
 

  cardtitle = 'Add a new Product';
  id: string | null;
  avatar!:any;
  constructor(private Router: Router,
    
    private toastr: ToastrService,
    private _coashService: CoashService,
    private aRouter: ActivatedRoute) {
    
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }
  coachForm: Coash = {
    _id: "",
    name: "",
    avatar: "",
    lastname: "",
	  email: ""
    
  };
     
  ngOnInit(): void {
    

  }

  loadImage(img: any) {
    this.avatar = img.target.files[0];
    console.log(this.avatar);
  }
  

  addCoach() {
    
    
        //add product
        console.log(this.coachForm);
        this._coashService.addCoash(this.coachForm, this.avatar).subscribe(data =>{
          this.Router.navigate(["/coashs"]);
          this.toastr.success('Coach Ajoutre avec succès!', 'Ajouter Coaach  !!');
         
        }, error =>{
          console.log(error);
        
        }) 
  }

 
  }