import { Component, OnInit } from '@angular/core';
import { LogoutService } from './logout.service';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  loading = false;

  constructor(
    private logoutService: LogoutService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.loading = true;
    this.logoutService
      .logout()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((result: string) => {
        console.log(`logout Success`, result);
        this.authService.setAuthUser({ avatar: '', role: '', username: '' });
        this.router.navigate(['/'], { replaceUrl: true });
      });
  }
}
