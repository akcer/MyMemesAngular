import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    DividerModule,
    AvatarModule,
    ProgressSpinnerModule,
    InputTextareaModule,
    FormsModule,
    RouterModule,
    ButtonModule,
  ],
  exports: [CommentsComponent],
})
export class CommentsModule {}
