import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.css']
})
export class ProfilAdminComponent implements OnInit {

  role!: String
  currentUser!: User;  
  username!: String;
  id: string | null;
  avatar!:any;
  constructor(

    private toastr: ToastrService,
    private _userService: AuthService,
    private aRouter: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService
  ) {
    this.currentUser = this.authenticationService.getCurrentUser().user;
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

    
  ngOnInit(): void {
   
    this.getAdminByID();
  }
  loadImage(img: any) {
    this.avatar = img.target.files[0];
    console.log(this.avatar);
  }

  getAdminByID(): void {
    if (this.id !== null) {
      this._userService.obteneruser(this.id).subscribe(data => {
        this.currentUser = data;
        console.log(data);
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
    this.router.navigate(["/products"]);
  }

  updateUser(): void {
    console.log(this.id);
    this._userService.updateUser(this.currentUser._id,this.currentUser, this.avatar).subscribe(data => {
    localStorage.setItem('user',JSON.stringify(this.currentUser));
    //this.router.navigate(["/profil"]);
     // this.authenticationService.logout();  
      
      this.toastr.info('The profil was successfully updated!', 'updated profile !!');
    }, error => {
      console.log(error);
    });

    localStorage.getItem('user') 
  }
}
