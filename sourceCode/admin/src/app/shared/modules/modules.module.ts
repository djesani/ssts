import { NgModule } from "@angular/core";
import { ApplicationAttachmentsComponent } from "./application-attachments/application-attachments.component";
import { SharedModule } from "../shared.module";

@NgModule({
  declarations: [
    ApplicationAttachmentsComponent,
  ],
  imports: [SharedModule],
  exports: [
    ApplicationAttachmentsComponent,
  ],
})
export class ModulesModule {}
