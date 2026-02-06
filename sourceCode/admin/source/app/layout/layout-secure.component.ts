import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

@Component({
    selector: 'app-layout-secure',
    standalone: true,
    imports: [RouterOutlet, SidebarComponent],
    template: `
    <app-sidebar></app-sidebar>
    <main id="main-content">
      <router-outlet></router-outlet>
    </main>
  `,
    styles: [`
    #main-content {
      min-height: 100vh;
      background-color: #f8f9fa;
    }
  `]
})
export class LayoutSecureComponent { }
