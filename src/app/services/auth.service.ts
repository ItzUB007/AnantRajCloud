import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  constructor() { }

  userLoggedIn:any = false;

  ngOnInit(): void {

    if(localStorage.getItem('loggedIn') == 'true'){
      this.userLoggedIn = true;
    }
    
  }

}
