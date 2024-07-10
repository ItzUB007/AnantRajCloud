import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router ) { }

  username:any;
  password:any;

  ngOnInit(): void {
    
  }

  login(){

    if(this.username == "admin" && this.password == "admin"){
      alert("Login Successful");
      this.authService.userLoggedIn = true;
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/addblogs']);

    }else{
      alert("Login Failed");
    }

  }

}
