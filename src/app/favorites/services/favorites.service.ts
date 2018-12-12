import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favsRef: AngularFireList<any>;
  user: firebase.User;

  constructor(private authFire: AngularFireAuth, private rbd: AngularFireDatabase, private router: Router) {
    authFire.authState.subscribe(
      user => {
        if(user){
          this.user = user;
          this.favsRef = rbd.list(`favorites/${this.user.uid}`);
        }
      }
    );
   }

   listFavorites() : Observable<any[]>{
    return this.favsRef.valueChanges();
   }

}
