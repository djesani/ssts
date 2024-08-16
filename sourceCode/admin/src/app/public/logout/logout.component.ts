import { Component, OnInit } from "@angular/core";

import { AuthService } from "../../core/auth/auth.service";
import { Router } from "@angular/router";

@Component({ template: "" })
export class LogoutComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.logout();
  }

  logout() {
    this.authService.logout().subscribe((res) => {
      if (!res.success) {
        this.router.navigate(["/public/login"]);
      }
    });
  }
}
