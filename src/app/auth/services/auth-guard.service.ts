import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService : AuthService, private route : Router) { }

  canActivate() : Observable<boolean>{
    let authState= this.authService.isLoggedIn;
    if (!authState || !localStorage.getItem('bzgPokeApp')){
      this.route.navigate(['/login']);
      return of(false);
    }else{
      return of(true);
    }
  }
}
