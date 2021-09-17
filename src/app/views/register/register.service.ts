import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  register(
    file: any,
    username: string,
    password: string,
    passwordConfirm: string,
    email: string
  ) {
    const formData = new FormData();
    formData.append('avatarFile', file);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('passwordConfirm', passwordConfirm);
    formData.append('email', email);

    return this.http.post<string>(
      `${environment.apiUrl}users/register`,
      formData,
      {}
    );
  }

  handleSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Register Success',
    });
  }
}
