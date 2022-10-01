import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarIconsListComponent } from './calendarIcons-list/calendarIcons-list.component';
import { CalendarIconsDetailComponent } from './calendarIcons-detail/calendarIcons-detail.component';
import { CalendarIconsFormComponent } from './calendarIcons-form/calendarIcons-form.component';

import { AuthGuard } from "../shared/auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: CalendarIconsListComponent,
    canActivate: [AuthGuard],
    // data: {
    //   permissions: {
    //     only: 'ADMIN',
    //     redirectTo: 'login'
    //   }
    // }
  },
  {
    path: 'details/:id',
    component: CalendarIconsDetailComponent,
    canActivate: [AuthGuard],
    data: {
      permissions: {
        only: 'ADMIN',
        redirectTo: 'login'
      }
    }
  },
  {
    path: 'add',
    component: CalendarIconsFormComponent,
    canActivate: [AuthGuard],
    data: {
      permissions: {
        only: 'ADMIN',
        redirectTo: 'login'
      }
    }
  },
  {
    path: 'edit/:id',
    component: CalendarIconsFormComponent,
    canActivate: [AuthGuard],
    data: {
      permissions: {
        only: 'ADMIN',
        redirectTo: 'login'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarIconsRoutingModule { }
