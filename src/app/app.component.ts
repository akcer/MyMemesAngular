import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from './core/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-memes';
  user: User = {};
  isUserLoggedIn: boolean = true;
  isUserAdmin: boolean = false;
  items: MenuItem[] = [];

  constructor(private authService: AuthService) {}

  setMenuBar(isUserLoggedIn: boolean, isUserAdmin: boolean) {
    this.items = [
      {
        label: 'Top',
        routerLink: ['/top'],
      },
      {
        label: 'Newest',
        routerLink: ['/newest'],
      },
      {
        label: 'Oldest',
        routerLink: ['/oldest'],
      },
      {
        label: 'Random',
        routerLink: ['/random'],
      },
      ...(isUserLoggedIn
        ? [
            {
              label: 'New',
              routerLink: ['/new'],
            },
            {
              label: 'Logout',
              routerLink: ['/logout'],
            },
            {
              label: 'User',
              routerLink: ['/user', this.user.username],
            },
          ]
        : [
            { label: 'Login', routerLink: ['/login'] },
            {
              label: 'Register',
              routerLink: ['/register'],
            },
          ]),
      ...(isUserAdmin
        ? [
            {
              label: 'Admin',
              routerLink: ['/admin'],
            },
          ]
        : []),
    ];
  }

  ngOnInit() {
    this.authService.getAuthUser().subscribe((user: any) => {
      this.user = user;
      this.isUserLoggedIn = !!user.username;
      this.isUserAdmin = user.role === 'admin';
      this.setMenuBar(this.isUserLoggedIn, this.isUserAdmin);
    });
    this.authService.authenticate().subscribe((result: User) => {
      this.authService.setAuthUser(result); 
    });
  }
}
