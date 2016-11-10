import { Component } from '@angular/core';
import {AuthService, User} from "./auth.service";
import {Router, NavigationCancel} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!!!';
  private user:User;

  constructor(private authService:AuthService, private router:Router){

    router.events.subscribe(e=>{
      console.log('e',e);
      /*if( e instanceof NavigationCancel )*/
    });

    authService.user$.subscribe(u=>{
      this.user = u;
    });
  }

  login(){
    this.authService.login();
  }
  logout(){
    this.authService.logout();
  }

}
