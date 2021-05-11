import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'

const modulePath = 'userProfile';

@Injectable()
export class UserProfileService {

  sample = {
    "permissions": ["ADMIN"]
  }

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(`${environment.CONTEXT_PATH}/${modulePath}`);
    // return this.sample;
  }

}