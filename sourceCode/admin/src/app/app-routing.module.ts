import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

import { LoginComponent } from "./shared/auth/login/login.component";
import { LogoutComponent } from "./shared/auth/logout/logout.component";

const routes: Routes = [
  // { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(             m => m.DashboardModule  ) },
  { path: 'events',           loadChildren: () => import('./events/events.module').then(                   m => m.EventsModule     ) },
  { path: 'calendarIcons',    loadChildren: () => import('./calendarIcons/calendarIcons.module').then(     m => m.CalendarIconsModule     ) },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }