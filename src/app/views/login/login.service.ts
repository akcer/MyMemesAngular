import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'; //'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<User>(
      `${environment.apiUrl}users/login/local`,
      {
        username,
        password,
      },
      { withCredentials: true }
    );
  }
}
