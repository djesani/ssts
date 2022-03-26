import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUploaderModule } from 'ngx-uploader';

import { ScrollToInvalidControlDirective } from './directives/scroll-to-invalid-control.directive';

import { CustomAdapter, CustomDateParserFormatter } from './services/ng-date-picker.service';
import { NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER } from "ngx-ui-loader";
import { NgxPermissionsModule } from 'ngx-permissions';

import { NotFoundComponent } from './not-found/not-found.component';

import { UserProfileService } from '../user-profile/user-profile.service';

import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { JwtInterceptor } from "./auth/jwt.interceptor";
import { ErrorInterceptor } from "./auth/error.interceptor";
import { LoginComponent } from "./auth/login/login.component";
import { LogoutComponent } from "./auth/logout/logout.component";

import { DashboardModule} from '../dashboard/dashboard.module';
import { FaModule} from './fontawesome/fa.module';

// import { AuthenticationService } from "./auth/authentication.service";

// used to create fake backend
import { fakeBackendProvider } from "./auth/fake-backend";

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: "darkorange", // foreground color
  fgsSize: 80,
  fgsType: SPINNER.fadingCircle,
  pbColor: "coral", // progress bar color
  pbThickness: 10,
  text: "loading ...",
  fastFadeOut: false,
};

@NgModule({
  declarations: [
    ScrollToInvalidControlDirective,
    NotFoundComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgbDatepickerModule,
    NgxUploaderModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxPermissionsModule.forChild(),
    ReactiveFormsModule,
    DashboardModule,
    FaModule,
  ],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
 
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
    UserProfileService,
    // AuthenticationService
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgbDatepickerModule,
    NgxUploaderModule,
    NgxUiLoaderModule,
    NgxPermissionsModule,
    ReactiveFormsModule,
    DashboardModule,
    ScrollToInvalidControlDirective,
    LoginComponent,
    LogoutComponent,
    FaModule
  ]
})
export class SharedModule {}
