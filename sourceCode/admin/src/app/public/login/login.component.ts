import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../core/auth/auth.service";
@Component({
  selector: "app-login",
  standalone: false,
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
        .subscribe({
          next: (n) => {},
          error: (error) => {
            console.log("login status", error.status);
            if (error.status == 200) {
              this.authService.setIsLoggedIn(true);
              // get return url from route parameters or default to '/'
              const returnUrl =
                this.route.snapshot.queryParams["returnUrl"] || "/";
              localStorage.setItem("isLoggedIn", "true");
              this.router.navigate([returnUrl]);
            } else {
              if (error.status == 401) {
                this.error = "Username or Password is incorrect.";
              }
              this.authService.setIsLoggedIn(false);
            }
          },
        });
    }
  }
}
