import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleMemeService } from './single-meme.service';
import { catchError } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

@Component({
  selector: 'app-single-meme',
  templateUrl: './single-meme.component.html',
  styleUrls: ['./single-meme.component.css'],
})
export class SingleMemeComponent implements OnInit {
  meme$!: Observable<Meme>;
  error$: Subject<boolean> = new Subject<boolean>();
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private singleMemeService: SingleMemeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.meme$ = this.singleMemeService.getMeme(params.id).pipe(
        catchError((err) => {
          this.errorMessage = err;
          this.error$.next(true);
          return throwError('Error');
        })
      );
    });
  }
}
