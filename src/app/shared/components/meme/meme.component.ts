import { Component, OnInit, Input } from '@angular/core';
import { MemeService } from './meme.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css'],
})
export class MemeComponent implements OnInit {
  @Input() meme = {} as Meme;
  apiUrl = environment.apiUrl;
  likeButtonLoading: boolean = false;
  dislikeButtonLoading: boolean = false;
  deleteButtonLoading: boolean = false;
  showDeleteMemeButton: boolean = false;

  constructor(
    private memeService: MemeService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getAuthUser().subscribe((user) => {
      if (
        user.role === 'admin' ||
        this.meme.author?.username === user.username
      ) {
        this.showDeleteMemeButton = true;
      }
    });
  }

  like(memeId: string) {
    this.likeButtonLoading = true;
    this.memeService
      .like(memeId)
      .pipe(finalize(() => (this.likeButtonLoading = false)))
      .subscribe((result: any) => {
        this.meme.likes.likesCount = result.likes;
        this.meme.dislikes.dislikesCount = result.dislikes;
      });
  }

  dislike(memeId: string) {
    this.dislikeButtonLoading = true;
    this.memeService
      .dislike(memeId)
      .pipe(finalize(() => (this.dislikeButtonLoading = false)))
      .subscribe((result: any) => {
        this.meme.likes.likesCount = result.likes;
        this.meme.dislikes.dislikesCount = result.dislikes;
      });
  }

  deleteMeme(memeId: string) {
    this.deleteButtonLoading = true;
    this.memeService
      .deleteMeme(memeId)
      .pipe(finalize(() => (this.deleteButtonLoading = false)))
      .subscribe((result: string) => {
        console.log(`Delete Success`, result);
        this.router.navigate(['/'], { replaceUrl: true });
      });
  }
}
