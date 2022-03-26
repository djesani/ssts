import { Component, OnInit } from "@angular/core";

import { AuthenticationService } from "../../auth/authentication.service";
import { User } from "../../auth/user";
import { Router } from "@angular/router";

@Component({ template: '' })
export class LogoutComponent implements OnInit {

  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  ngOnInit(): void {
    this.logout();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }

}
