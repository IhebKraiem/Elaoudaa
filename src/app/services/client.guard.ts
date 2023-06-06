import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      const user = this.auth.getCurrentUser();

    if ( (this.auth.isAuthenticated() && user.role.toString() === 'client') ) {      
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
  canActivate1(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      const user = this.auth.getCurrentUser();

    if (this.auth.isAuthenticated() && user.role.toString() === 'client' ) {      
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
  
  
}
