import { Component, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';
import { catchError } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  constructor(
    private galleryService: GalleryService,
  ) {}

  memes$!: Observable<Meme[]>;
  error$: Subject<boolean> = new Subject<boolean>();
  errorMessage: string = '';
  memesCount: number = 0;
  limit: number = 2;
  skip: number = 0;
  sort: string = window.location.pathname.substring(1);

  ngOnInit(): void {
    this.getMemes(this.limit, this.skip, this.sort);
    this.getMemesCount();
  }

  getMemes(limit: number, skip: number, sort: string) {
    this.memes$ = this.galleryService.getMemes(limit, skip, sort).pipe(
      catchError((err) => {
        this.errorMessage = err;
        this.error$.next(true);
        return throwError('Error');
      })
    );
  }
  getMemesCount() {
    this.galleryService.getMemesCount().subscribe((count: number) => {
      this.memesCount = count;
    });
  }
  paginate(event: any) {
    this.limit = event.rows;
    this.skip = event.rows * event.page;
    this.getMemes(this.limit, this.skip, this.sort);
  }
}
