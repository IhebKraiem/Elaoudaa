import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() currentUser!: Client;
  currentUser1!: Client;
  name!: String;
    constructor(
        private router: Router,
        private authenticationService: AuthService,
        private _clientService: ClientService,
    ) {
        this.currentUser1 = this.authenticationService.getCurrentUser().user;
    }
    ngOnInit(): void {
      this._clientService.obtenerClient(this.currentUser1._id).subscribe(res=>{
        this.currentUser=res
      })
    }

    get isAdmin() {
        return this.currentUser && this.currentUser.role === "Client";
    }

     logout() {
         this.authenticationService.logout();
         this.router.navigate(["/login"]);
         //this.router.navigate(['/login']);
     }


}
