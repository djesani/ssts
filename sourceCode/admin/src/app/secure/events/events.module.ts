import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { ModulesModule } from '../../shared/modules/modules.module';

import { EventsFormComponent } from './events-form/events-form.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventsSearchPipe } from './events.search.pipe';
import { EventsService } from './events.service';
import { UploadFilesService } from '../../shared/modules/uploadFiles/uploadFiles.service';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

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
    CKEditorModule,
    MatTableModule,
    ModulesModule
  ],
  exports: [
    EventsFormComponent,
    EventsListComponent,
    EventsSearchPipe,
  ],

  providers: [EventsService, UploadFilesService],
})
export class EventsModule { }
