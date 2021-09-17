import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AddNewMemeService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  addNewMeme(file: any, topTitle: string, bottomTitle: string, text: string) {
    const formData = new FormData();
    formData.append('imageFile', file);
    formData.append('topTitle', topTitle);
    formData.append('bottomTitle', bottomTitle);
    formData.append('text', text);

    return this.http.post(`${environment.apiUrl}memes/add`, formData, {
      withCredentials: true,
    });
  }
  handleSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Meme Added',
    });
  }
}
