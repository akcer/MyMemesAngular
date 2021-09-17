import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SingleMemeService {
  constructor(private http: HttpClient) {}

  getMeme(memeId: string) {
    return this.http.get<Meme>(`${environment.apiUrl}memes/meme/${memeId}`);
  }
}
