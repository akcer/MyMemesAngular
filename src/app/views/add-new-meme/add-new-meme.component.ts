import { Component, OnInit } from '@angular/core';
import { AddNewMemeService } from './add-new-meme.service';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-meme',
  templateUrl: './add-new-meme.component.html',
  styleUrls: ['./add-new-meme.component.css'],
})
export class AddNewMemeComponent implements OnInit {
  constructor(
    private addNewMemeService: AddNewMemeService,
    private router: Router
  ) {}

  loading = false;
  topTitle: string = '';
  bottomTitle: string = '';
  text: string = '';
  uploadedFiles: File[] = [];
  maxFileSize: number = 1000000;
  file = {} as File;

  ngOnInit(): void {}

  addNewMeme() {
    this.loading = true;
    this.addNewMemeService
      .addNewMeme(this.file, this.topTitle, this.bottomTitle, this.text)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((result: any) => {
        this.addNewMemeService.handleSuccess();
        this.router.navigate(['/meme', result.response?._id], {
          replaceUrl: true,
        });
      });
  }

  myUploader(event: EventTarget & { files: FileList }) {
    this.file = event.files[0];
  }
}
