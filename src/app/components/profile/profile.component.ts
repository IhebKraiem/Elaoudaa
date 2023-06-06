import { Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/models/client';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  role!: String
  currentUser!: Client;  
  currentUser1!: Client;  
  name!: String;
  id: string | null;
  avatar!:any;
  constructor(private fb: FormBuilder,

    private toastr: ToastrService,
    private _clientService: ClientService,
    private aRouter: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService
  ) {
    this.currentUser = this.authenticationService.getCurrentUser().user;
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

    
  ngOnInit(): void {
    //this.listCategories();
    this._clientService.obtenerClient(this.currentUser._id).subscribe(res=>{
      this.currentUser1 = res;
        console.log(this.currentUser1);
    })
  }
  loadImage(img: any) {
    this.avatar = img.target.files[0];
    console.log(this.avatar);
  }

  getClientByID(): void {
    if (this.id !== null) {
      this._clientService.obtenerClient(this.currentUser._id).subscribe(data => {
       
        this.currentUser1 = data;
        console.log(this.currentUser1);
      },
        error => {
          console.log(error);
        });
    }
  }

  onSubmit() { 
    
  this.gotoList();   
  }

  gotoList() {
    this.router.navigate(["/home"]);
  }

  updateClient(): void {
    console.log(this.id);
    this._clientService.updateClient(this.currentUser._id,this.currentUser1, this.avatar).subscribe(data => {
     this.currentUser1 = data;
      console.log(this.currentUser1)
      // localStorage.setItem('user',JSON.stringify(this.currentUser));
      //this.router.navigate(["/profile"]);
      //this.authenticationService.logout();  
      this.toastr.info(' Le profil été modifier!');
      window.location.reload()

      
    }, error => {
      console.log(error);
    });

    localStorage.getItem('user') 
  }
}
