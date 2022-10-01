import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { EventsDetailComponent } from './events-detail/events-detail.component';
import { EventsFormComponent } from './events-form/events-form.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventsSearchPipe } from './events.search.pipe';
import { EventsService } from './events.service';

import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    EventsDetailComponent,
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
  ],
  exports: [
    EventsDetailComponent,
    EventsFormComponent,
    EventsListComponent,
    EventsSearchPipe,
  ],

  providers: [EventsService],
})
export class EventsModule { }
