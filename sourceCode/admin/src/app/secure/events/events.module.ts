import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { EventsFormComponent } from './events-form/events-form.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventsSearchPipe } from './events.search.pipe';
import { EventsService } from './events.service';

import { AngularEditorModule } from '@kolkov/angular-editor';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    EventsFormComponent,
    EventsListComponent,
    EventsSearchPipe,
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AngularEditorModule,
    MatTableModule
  ],
  exports: [
    EventsFormComponent,
    EventsListComponent,
    EventsSearchPipe,
  ],

  providers: [EventsService],
})
export class EventsModule { }
