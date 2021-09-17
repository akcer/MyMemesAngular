import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUser$ = new BehaviorSubject<User>({ avatar: '', role: '', username: '' });

  constructor(private http: HttpClient) {}

  getAuthUser(){
    return this.authUser$.asObservable()
  }

  setAuthUser(user:User){
    return this.authUser$.next(user)
  }

  authenticate() {
    return this.http.get(`${environment.apiUrl}users/authenticate`, {
      withCredentials: true,
    });
  }
}
