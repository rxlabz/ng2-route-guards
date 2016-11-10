import {Component} from "@angular/core";
import {AuthService, User} from "./auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!!!';
  private user:User;

  constructor(private authService:AuthService, private router:Router){

    authService.user$.subscribe(u=>{
      this.user = u;
      if( u == null )
        this.router.navigate(['/login']);
    });
  }

  login(){
    this.authService.login();
  }
  logout(){
    this.authService.logout();
  }

}
