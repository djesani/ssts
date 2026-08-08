import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";

const baseUrl = `${environment.CONTEXT_PATH}/calendaricons`;

@Injectable()
export class CalendarIconsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  add(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.patch(`${baseUrl}/${id}`, data);
  }
}
