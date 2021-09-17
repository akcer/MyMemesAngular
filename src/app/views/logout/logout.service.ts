import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  constructor(private http: HttpClient) {}

  logout() {
    return this.http.get<string>(`${environment.apiUrl}users/logout`, {
      withCredentials: true,
    });
  }
}
