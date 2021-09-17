import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private authService: AuthService
  ) {}

  loading: boolean = false;
  username: string = '';
  password: string = '';

  ngOnInit(): void {}

  login(username: string, password: string) {
    this.loading = true;
    this.loginService
      .login(username, password)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((user: User) => {
        this.authService.setAuthUser({
          avatar: user.avatar,
          role: user.role,
          username: user.username,
        });
        this.router.navigate(['/user', user.username]);
      });
  }
}
