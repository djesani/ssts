import { NgModule } from "@angular/core";
import { UploadFilesComponent } from "./uploadFiles/uploadFiles.component";
import { SharedModule } from "../shared.module";

@NgModule({
  declarations: [
    UploadFilesComponent,
  ],
  imports: [SharedModule],
  exports: [
    UploadFilesComponent,
  ],
})
export class ModulesModule {}
