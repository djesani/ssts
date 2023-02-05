import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsFormComponent } from './events-form/events-form.component';

import { AuthGuard } from '../../core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: EventsListComponent,
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
    component: EventsFormComponent,
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
    component: EventsFormComponent,
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
export class EventsRoutingModule { }
