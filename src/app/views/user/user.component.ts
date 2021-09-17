import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  errorMessage: string = '';
  error$: Subject<boolean> = new Subject<boolean>();
  user$!: Observable<User>;
  apiUrl = environment.apiUrl;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService 
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.user$ = this.userService.getUser(params.username).pipe(
        catchError((err) => {
          this.errorMessage = err;
          this.error$.next(true);
          return throwError('Error');
        })
      );
    });
  }
}
