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

  upload(file: File): Observable<any> {
    // console.log("FileUploadService - file", file)
    const formData: FormData = new FormData();
    // formData.append("documentType", "abc");
    // formData.append("applicationId", "def");
    formData.append("file", file);
    return this.http.post(`${this.baseUrl}/fileupload`, formData);
  }
}
