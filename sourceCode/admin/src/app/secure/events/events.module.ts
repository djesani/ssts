import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularEditorModule } from '@kolkov/angular-editor';

import { SharedModule } from "../../shared/shared.module";

import { EventsFormComponent } from "./events-form/events-form.component";
import { EventsListComponent } from "./events-list/events-list.component";
import { EventsRoutingModule } from "./events-routing.module";
import { EventsSearchPipe } from "./events.search.pipe";
import { EventsService } from "./events.service";

@NgModule({
  declarations: [EventsFormComponent, EventsListComponent, EventsSearchPipe],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AngularEditorModule,
  ],
  exports: [EventsFormComponent, EventsListComponent, EventsSearchPipe],

  providers: [EventsService],
})
export class EventsModule {}
