import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { DashboardNavSideComponent } from './dashboard-nav-side/dashboard-nav-side.component';
import { DashboardNavTopComponent } from './dashboard-nav-top/dashboard-nav-top.component';

import { FaModule} from '../shared/fontawesome/fa.module';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardMainComponent,
    DashboardNavSideComponent,
    DashboardNavTopComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    FaModule
  ],
  exports: [
    DashboardComponent,
    DashboardMainComponent,
    DashboardNavSideComponent,
    DashboardNavTopComponent,
  ]
})
export class DashboardModule { }
