import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MemeService {
  constructor(private http: HttpClient) {}

  like(memeId: string) {
    return this.http.patch(`${environment.apiUrl}memes/like/${memeId}`, null, {
      withCredentials: true,
    });
  }

  dislike(memeId: string) {
    return this.http.patch(
      `${environment.apiUrl}memes/dislike/${memeId}`,
      null,
      { withCredentials: true }
    );
  }

  deleteMeme(memeId: string) {
    return this.http.delete<string>(`${environment.apiUrl}memes/${memeId}`, {
      withCredentials: true,
    });
  }
}
