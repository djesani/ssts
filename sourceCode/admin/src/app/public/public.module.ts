import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PublicRoutingModule } from "./public-routing.module";

import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";

import { Page404Component } from "./page404/page404.component";

@NgModule({
  declarations: [LogoutComponent, Page404Component, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PublicRoutingModule,
  ],
  exports: [LoginComponent, LogoutComponent, Page404Component],
})
export class PublicModule {}
