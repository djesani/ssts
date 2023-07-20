import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public isLoggedIn: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.isLoggedIn = new BehaviorSubject(false);
  }

  public setIsLoggedIn(status: boolean) {
    this.isLoggedIn.next(status);
  }

  public getIsLoggedIn() {
    return this.isLoggedIn.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.CONTEXT_PATH}/auth/basic2`, {
      username,
      password,
    });
  }

  logout() {
    localStorage.setItem("isLoggedIn", "false");
    this.setIsLoggedIn(false);
    return of({ success: false });
  }
}
