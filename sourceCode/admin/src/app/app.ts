import { Component, signal } from '@angular/core';
// import { Event, Router, NavigationStart, NavigationEnd } from "@angular/router";
// import { NgxSpinnerService } from "ngx-spinner";

import { RouterOutlet } from '@angular/router';

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
      // template: ` title:{{title}}<router-outlet></router-outlet>`
  templateUrl: "./app.html",
})
export class App {

protected readonly title = signal('app root via signal');


  // currentUrl: string;
  // constructor(public _router: Router, private spinner: NgxSpinnerService) {
    // this._router.events.subscribe((routerEvent: Event) => {
    //   if (routerEvent instanceof NavigationStart) {
    //     this.spinner.show();
    //     this.currentUrl = routerEvent.url.substring(
    //       routerEvent.url.lastIndexOf("/") + 1
    //     );
    //   }
    //   if (routerEvent instanceof NavigationEnd) {
    //     this.spinner.hide();
    //   }
    //   window.scrollTo(0, 0);
    // });
  // }
}