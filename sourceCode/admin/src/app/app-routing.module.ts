import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guard/auth.guard';

import { LayoutPublicComponent } from './layout/layout-public/layout-public.component';
import { LayoutSecureComponent } from './layout/layout-secure/layout-secure.component';

import { Page404Component } from './public/page404/page404.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutSecureComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/events', pathMatch: 'full' },
      {
        path: 'events',
        loadChildren: () => import('./secure/events/events.module').then(m => m.EventsModule)
      },
    ]
  },
  {
    path: 'public',
    component: LayoutPublicComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./public/public.module').then(m => m.PublicModule)
      }
    ]
  },
  { path: '**', component: Page404Component },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }