import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class FileUploadService {
  private baseUrl = `${environment.CONTEXT_PATH}`;

  constructor(private http: HttpClient) {}

  // upload(file: File): Observable<HttpEvent<any>> {
  //   const formData: FormData = new FormData();

  //   formData.append('file', file);

  //   const req = new HttpRequest('POST', `${this.baseUrl}/fileupload`, formData, {
  //     reportProgress: true,
  //     responseType: 'json',
  //   });

  //   return this.http.request(req);
  // }

  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append("file", file);
    return this.http.post(`${this.baseUrl}/fileupload`, formData);
  }
}
