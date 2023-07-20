import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { PublicModule} from './public/public.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageLoaderComponent } from './layout/page-loader/page-loader.component';
import { LayoutPublicComponent } from './layout/layout-public/layout-public.component';
import { LayoutSecureComponent } from './layout/layout-secure/layout-secure.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

import { fakeBackendProvider } from './core/interceptor/fake-backend';
// import { ErrorInterceptor } from './core/interceptor/error.interceptor';
// import { JwtInterceptor } from './core/interceptor/jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    
    PageLoaderComponent,
    LayoutPublicComponent,
    LayoutSecureComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    // core, public & shared
    CoreModule,
    PublicModule,
    SharedModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // fakeBackendProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
