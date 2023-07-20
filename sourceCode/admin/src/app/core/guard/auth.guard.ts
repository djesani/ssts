import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router) { }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ) {

  //   // if (this.authService.currentUserValue) {
  //   //   const userRole = this.authService.currentUserValue.role;
  //   //   if (route.data['role'] && route.data['role'].indexOf(userRole) === -1) {
  //   //     // not logged in so redirect to login page with the return url and return false
  //   //     this.router.navigate(['/public/login'], { queryParams: { returnUrl: state.url } });
  //   //     return false;
  //   //   }
  //   //   return true;
  //   // }

  //   // not logged in so redirect to login page with the return url and return false
  //   this.router.navigate(['/public/login'], { queryParams: { returnUrl: state.url } });
  //   return false;
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.authService.currentUserValue;

    console.log("AuthGuard canActivate", this.authService.currentUserValue);
    if (this.authService.currentUserValue) {
        // logged in so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/public/login'], { queryParams: { returnUrl: state.url } });
    return false;
}

}