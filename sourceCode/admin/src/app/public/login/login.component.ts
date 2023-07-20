import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { AuthService } from "../../core/guard/auth.service";
// import { Role } from "src/app/core/models/role";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error = "";

  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.error = "";

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.error = "Username and Password not valid !";
      return;
    } else {
      this.authService
        .login(this.f["username"].value, this.f["password"].value)
        .pipe(first())
        .subscribe({
          next: (n) => {
            console.log("next", n)
            // get return url from route parameters or default to '/'
            const returnUrl =
              this.route.snapshot.queryParams["returnUrl"] || "/";

              console.log("returnUrl", returnUrl)
            this.router.navigate([returnUrl]);
          },
          error: (error) => {
            this.error = error.message;

            console.log("LoginComponent authService.login subscribe error", error)
            const returnUrl =
            this.route.snapshot.queryParams["returnUrl"] || "/";

            console.log("returnUrl", returnUrl)
          this.router.navigate([returnUrl]);
          },
        });

      // this.authService
      //   .login(this.f["username"].value, this.f["password"].value)
      //   .subscribe({
      //     next: (res) => {
      //       console.log("authService.login.subscribe", res);
      //       if (res) {
      //         setTimeout(() => {
      //           const role = this.authService.currentUserValue.role;
      //           // if (role === Role.All || role === Role.Admin) {
      //           this.returnUrl =
      //             this.route.snapshot.queryParams["returnUrl"] || "/";
      //           this.router.navigate([this.returnUrl]);
      //           // } else {
      //           //   this.router.navigate(["/public/login"]);
      //           // }
      //         }, 1000);
      //       } else {
      //         this.error = "Invalid Login";
      //       }
      //     },
      //     error: (error) => {
      //       this.error = error;
      //       console.log("LoginComponent authService subscribe error", error);
      //       console.log("authService.login.subscribe - error.error.text", error.error.text);
      //       if (error) {
      //         setTimeout(() => {
      //           // const role = this.authService.currentUserValue.role;
      //           // if (role === Role.All || role === Role.Admin) {
      //           this.returnUrl =
      //             this.route.snapshot.queryParams["returnUrl"] || "/";
      //           this.router.navigate([this.returnUrl]);
      //           // } else {
      //           //   this.router.navigate(["/public/login"]);
      //           // }
      //         }, 1000);
      //       } else {
      //         this.error = "Invalid Login";
      //       }
      //     },
      //     complete: () => {
      //       console.log("complete");
      //       this.returnUrl =
      //         this.route.snapshot.queryParams["returnUrl"] || "/";
      //       this.router.navigate([this.returnUrl]);

      //       // this.router.navigate(["/public/login"]);
      //     },
      //   });
    }
  }
}
