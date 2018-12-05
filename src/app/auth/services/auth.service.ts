import { Injectable } from '@angular/core';
import { ILogin } from "../models/interfaces/ILogin";
import { AngularFireAuthModule, AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase/app';
import { Observable } from "rxjs";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authFire : AngularFireAuth, private router:Router) { }

  login(auth : ILogin){
    return this.authFire.auth.signInWithEmailAndPassword(auth.email, auth.password);
  }
}
