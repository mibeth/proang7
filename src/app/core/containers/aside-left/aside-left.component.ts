import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.css'],
  animations: [
    trigger('asideAnimation',[
      state('close', style({
          width:'50px'
      })),
      state('open',style({
        width: '300px'
      })),
      transition('open => close', animate('100ms ease-out')),
      transition('close => open', animate('100ms ease-in'))
    ])
  ]
})
export class AsideLeftComponent implements OnInit {
  user: {
    name:string, email:string,photoUrl:string
  };

  constructor() { }

  ngOnInit() {
    this.user ={
      name: "Usuario Prueba",
      email: "mibeth@gmail.com",
      photoUrl: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
    }
  }

}
