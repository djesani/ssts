import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { AuthenticationService } from "./authentication.service";
import { UserProfileService } from '../../user-profile/user-profile.service';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {

  userPermissions: any;
  isLoggedIn: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userProfileService: UserProfileService,
    private permissionsService: NgxPermissionsService,
  ) {
      this.isLoggedIn = this.authenticationService.isLoggedIn;
   }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) {


    // this.userProfileService.get().subscribe((data: any[]) => {
    //   this.userPermissions = data;
    //   this.userPermissions = {
    //     "permissions": ["ADMIN"]
    //   }
    //   // this.permissionsService.loadPermissions(this.userPermissions.permissions);
    // });

    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
