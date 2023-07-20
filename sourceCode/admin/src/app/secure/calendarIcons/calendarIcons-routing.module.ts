import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarIconsListComponent } from './calendarIcons-list/calendarIcons-list.component';
import { CalendarIconsFormComponent } from './calendarIcons-form/calendarIcons-form.component';

import { AuthGuard } from '../../core/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CalendarIconsListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add',
    component: CalendarIconsFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/:id',
    component: CalendarIconsFormComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarIconsRoutingModule { }
