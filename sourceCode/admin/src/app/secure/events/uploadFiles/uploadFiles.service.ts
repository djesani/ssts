import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../../environments/environment";

const baseUrl = `${environment.CONTEXT_PATH}/fileupload`;

@Injectable()
export class UploadFilesService {
  // private uploadFiles = new BehaviorSubject([]);

  constructor(private http: HttpClient) {}

  public postUploadFile(uploadFile: any): Observable<any> {
    console.log("postUploadFile", uploadFile);
    console.log("baseUrl", baseUrl);
    return this.http.post(baseUrl, uploadFile);
  }

  // update(id: any, data: any): Observable<any> {
  //   return this.http.patch(`${baseUrl}/${id}`, data);
  // }

  //   sendPostRequest(data: any): Observable<any> {
  //     return this.http.post<any>(YOUR-SERVER-URL, data);
  // }

  // public deleteUploadFile(uploadFile) {
  //   return this.http.delete(baseUrl + uploadFile.id);
  // }

  // public setUploadFiles(uploadFiles) {
  //   this.uploadFiles.next(uploadFiles);
  // }
  // public getUploadFiles() {
  //   return this.uploadFiles;
  // }
}

// import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
// import { Observable } from "rxjs";

// import { environment } from "../../../environments/environment";

// const baseUrl = `${environment.CONTEXT_PATH}/events`;

// @Injectable()
// export class EventsService {
//   constructor(private httpClient: HttpClient) {}

//   getAll(): Observable<any> {
//     return this.httpClient.get(baseUrl);
//   }

//   get(id): Observable<any> {
//     return this.httpClient.get(`${baseUrl}/${id}`);
//   }

//   add(data): Observable<any> {
//     return this.httpClient.post(baseUrl, data);
//   }

//   update(id: any, data: any): Observable<any> {
//     return this.httpClient.patch(`${baseUrl}/${id}`, data);
//   }

//   delete(id): Observable<any> {
//     return this.httpClient.delete(`${baseUrl}/${id}`);
//   }
// }
