import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

import { environment } from "../../../../environments/environment";

const baseUrl = `${environment.CONTEXT_PATH}/fileupload`;

@Injectable()
export class UploadFilesService {
  private uploadFiles = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient) {}

  public postUploadFile(uploadFile) {
    console.log("postUploadFile", uploadFile )
    console.log("baseUrl", baseUrl )
    return this.httpClient.post(baseUrl, uploadFile);
  }

  public deleteUploadFile(uploadFile) {
    return this.httpClient.delete(baseUrl + uploadFile.id);
  }

  public setUploadFiles(uploadFiles) {
    this.uploadFiles.next(uploadFiles);
  }
  public getUploadFiles() {
    return this.uploadFiles;
  }
}
