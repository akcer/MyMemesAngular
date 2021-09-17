import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RandomMemeService {
  constructor(private http: HttpClient) {}

  getRandomMeme() {
    return this.http.get<Meme>(`${environment.apiUrl}memes/random`,{});
  }
}
