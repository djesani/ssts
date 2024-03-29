import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarIconsListComponent } from './calendarIcons-list/calendarIcons-list.component';
import { CalendarIconsFormComponent } from './calendarIcons-form/calendarIcons-form.component';

import { AuthGuard } from '../../core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CalendarIconsListComponent,
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
