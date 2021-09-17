import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  getComments(memeId: string) {
    return this.http.get<Comment[]>(
      `${environment.apiUrl}comments/${memeId}`,
      {}
    );
  }
  addNewComment(comment: string, memeId: string) {
    return this.http.post<Comment>(
      `${environment.apiUrl}comments/add`,
      {
        text: comment,
        meme: memeId,
      },
      {
        withCredentials: true,
      }
    );
  }
  removeComment(commentId: string) {
    return this.http.delete<string>(`${environment.apiUrl}comments/${commentId}`, {
      withCredentials: true,
    });
  }
}
