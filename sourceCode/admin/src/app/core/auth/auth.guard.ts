import { Injectable } from "@angular/core";
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let isLoggedIn = this.authService.getIsLoggedIn();

    if (isLoggedIn) {
      return true;
    }
    
    // not logged in so redirect to login page with the return url
    this.router.navigate(["/public/login"], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}
