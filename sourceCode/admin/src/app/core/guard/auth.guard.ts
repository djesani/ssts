import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isLoggedIn = this.authService.getIsLoggedIn();

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
