import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ngx-ui-loader></ngx-ui-loader>
    <app-dashboard></app-dashboard>
  `,
})
export class AppComponent {}