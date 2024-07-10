import { CanActivateFn, Router  } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable, inject } from '@angular/core';


@Injectable()
 export class PermissionsService {

 constructor(
 public router: Router,
 public authService: AuthService
 ) { }

 canActivate(): boolean {
  if(this.authService.userLoggedIn || localStorage.getItem('loggedIn') == 'true'){
    return true;
  }else{
    this.router.navigate(['/login']);
    return false;
  }
 }

 }
export const authGuard: CanActivateFn = (route, state) => {
  return inject(PermissionsService).canActivate();
};
