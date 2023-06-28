import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { CalendarIconsFormComponent } from './calendarIcons-form/calendarIcons-form.component';
import { CalendarIconsListComponent } from './calendarIcons-list/calendarIcons-list.component';
import { CalendarIconsRoutingModule } from './calendarIcons-routing.module';
import { CalendarIconsSearchPipe } from './calendarIcons.search.pipe';
import { CalendarIconsService } from './calendarIcons.service';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    CalendarIconsFormComponent,
    CalendarIconsListComponent,
    CalendarIconsSearchPipe,
  ],
  imports: [
    CommonModule,
    CalendarIconsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatTableModule
  ],
  exports: [
    CalendarIconsFormComponent,
    CalendarIconsListComponent,
    CalendarIconsSearchPipe,
  ],

  providers: [CalendarIconsService],
})
export class CalendarIconsModule { }
