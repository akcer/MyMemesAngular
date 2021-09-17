import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  isUserRoleAdmin: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): Promise<boolean | UrlTree> | boolean {
    this.authService.getAuthUser().subscribe((user: User) => {
      this.isUserRoleAdmin = user.role === 'admin';
    });
    return this.isUserRoleAdmin ? true : this.router.navigateByUrl('/');
  }
}
