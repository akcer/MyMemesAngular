import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private http: HttpClient) {}

  getMemes(limit = 2, skip = 0, sort = 'newest') {
    const params = new HttpParams()
      .set('limit', limit)
      .set('skip', skip)
      .set('sort', sort);
    return this.http.get<Meme[]>(`${environment.apiUrl}memes`, {
      params,
    });
  }

  getMemesCount() {
    return this.http.get<number>(`${environment.apiUrl}memes/count`);
  }
}
