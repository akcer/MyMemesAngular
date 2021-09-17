import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterService } from './register.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private router: Router,
    private registerService: RegisterService
  ) {}

  loading = false;
  username: string = '';
  password: string = '';
  passwordConfirm: string = '';
  email: string = '';
  uploadedFiles: File[] = [];
  maxFileSize: number = 1000000;
  file = {} as File;

  ngOnInit(): void {}

  myUploader(event: EventTarget & { files: FileList }) {
    this.file = event.files[0];
  }

  register() {
    this.loading = true;
    this.registerService
      .register(
        this.file,
        this.username,
        this.password,
        this.passwordConfirm,
        this.email
      )
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((result) => {
        this.registerService.handleSuccess();
        this.router.navigate(['/login']);
      });
  }
}
