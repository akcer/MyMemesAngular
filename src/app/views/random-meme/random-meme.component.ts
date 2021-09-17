import { Component, OnInit } from '@angular/core';
import { RandomMemeService } from './random-meme.service';
import { catchError, finalize } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

@Component({
  selector: 'app-random-meme',
  templateUrl: './random-meme.component.html',
  styleUrls: ['./random-meme.component.css'],
})
export class RandomMemeComponent implements OnInit {
  randomMeme$!: Observable<Meme>;
  loading: boolean = false;
  error$: Subject<boolean> = new Subject<boolean>();
  errorMessage: string = '';

  constructor(private randomMemeService: RandomMemeService) {}

  ngOnInit(): void {
    this.getRandomMeme();
  }

  getRandomMeme() {
    this.loading = true;
    this.randomMeme$ = this.randomMemeService.getRandomMeme().pipe(
      finalize(() => (this.loading = false)),
      catchError((err) => {
        this.errorMessage = err;
        this.error$.next(true);
        return throwError('Error');
      })
    );
  }
}
