import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from './comments.service';
import { environment } from 'src/environments/environment';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() memeId: string = '';
  apiUrl: string = environment.apiUrl;
  isCommentsOpen: boolean = false;
  comments$!: Observable<Comment[]>;
  newComment: string = '';
  loading: boolean = false;
  authUser: User = {};

  constructor(
    private commentsService: CommentsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getAuthUser().subscribe((user) => {
      this.authUser = user;
    });
  }

  showComments() {
    this.isCommentsOpen = true;
    this.getComments(this.memeId);
  }
  getComments(memeId: string) {
    this.comments$ = this.commentsService.getComments(memeId);
  }
  addNewComment(comment: string, memeId: string) {
    this.loading = true;
    return this.commentsService
      .addNewComment(comment, memeId)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(() => {
        this.getComments(this.memeId);
        this.newComment = '';
      });
  }
  showRemoveCommentButton(username: string | undefined): boolean {
    if (username === this.authUser.username || this.authUser.role === 'admin') {
      return true;
    }
    return false;
  }
  removeComment(commentId: string) {
    return this.commentsService.removeComment(commentId).subscribe((result) => {
      this.getComments(this.memeId);
    });
  }
}
