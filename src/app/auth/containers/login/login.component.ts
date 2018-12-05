import { Component, OnInit, NgZone } from '@angular/core';
import { ILogin } from "../../models/interfaces/ILogin";
import { Login } from "../../models/Login";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: ILogin;
  loginForm = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private zone: NgZone, private router : Router) {
    this.login = new Login();
  }

  submit() {
    if (this.loginForm.value) {
      this.authService.login(this.loginForm.value)
      .then(
        user => {
          localStorage.setItem('bzgPokeApp', JSON.stringify(user));
          this.router.navigate(['main'])
        }
      );
    }
  }

  signWithGoogle(){
    console.log("entro");
    if (this.loginForm.value) {
      this.authService.loginWithGoogle()
      .then(
        user => {
          localStorage.setItem('bzgPokeApp', JSON.stringify(user));
          this.zone.run(
            res =>{
              this.router.navigate(['main'])
            }
          );
          
        }
      );
    }
  }

  ngOnInit() {
  }
 

}
