import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewMemeComponent } from './add-new-meme.component';
import { AddNewMemeRoutingModule } from './add-new-meme-routing.module';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [AddNewMemeComponent],
  imports: [
    CommonModule,
    AddNewMemeRoutingModule,
    FileUploadModule,
    ProgressSpinnerModule,
    InputTextModule,
    FormsModule,
  ],
})
export class AddNewMemeModule {}
