import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsFormComponent } from './events-form/events-form.component';

import { AuthGuard } from '../../shared/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: EventsListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add',
    component: EventsFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/:id',
    component: EventsFormComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
