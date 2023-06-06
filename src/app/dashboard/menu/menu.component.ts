import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  currentUser!: User;
  name!: String;
    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) {
        this.currentUser = this.authenticationService.getCurrentUser().user;
    }
    ngOnInit(): void {

    }

    get isAdmin() {
        return this.currentUser && this.currentUser.role === "Admin";
    }

     logout() {
         this.authenticationService.logout();
        
     }


}