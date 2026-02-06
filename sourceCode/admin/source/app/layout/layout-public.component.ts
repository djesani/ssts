import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-layout-public',
    standalone: true,
    imports: [RouterOutlet],
    template: `
    <div class="public-container">
      <router-outlet></router-outlet>
    </div>
  `,
    styles: [`
    .public-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #e9ecef;
    }
  `]
})
export class LayoutPublicComponent { }
