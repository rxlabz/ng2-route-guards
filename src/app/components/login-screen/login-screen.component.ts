import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor(private router:Router, private authService:AuthService) { }

  login(){
    this.authService.login();
  }

  ngOnInit() {
  }

}
