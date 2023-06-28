import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { NgxSpinnerModule } from 'ngx-spinner';

import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomAdapter, CustomDateParserFormatter } from './services/ng-date-picker.service';
import { NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

import { FaModule} from './fontawesome/fa.module';
import { ScrollToInvalidControlDirective } from './directives/scroll-to-invalid-control.directive';

import { MaterialModule } from "./material.module";
import { FeatherIconsModule } from "./modules/feather-icons/feather-icons.module";

const sharedModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  NgbModule,
  NgxSpinnerModule,
  HttpClientModule,
  NgbDatepickerModule,
  FaModule,
];

@NgModule({
  declarations: [
    ScrollToInvalidControlDirective,
  ],
  imports: [sharedModules],
  exports: [
    sharedModules, 
    ScrollToInvalidControlDirective,
    MaterialModule,
    FeatherIconsModule,
  ],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],
})
export class SharedModule {}