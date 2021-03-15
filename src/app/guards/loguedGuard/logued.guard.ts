import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class LoguedGuard implements CanActivate {

  storageUser: Users;
  
  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    this.storageUser = localStorage.getItem('user') != null ? JSON.parse( localStorage.getItem('user')) : null;
    if(this.storageUser != null){
      return true;
    }else{
      return this.router.navigateByUrl("/login");
    }
  }
  
}
