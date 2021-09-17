import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemeComponent } from './meme.component';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommentsModule } from '../comments/comments.module';

@NgModule({
  declarations: [MemeComponent],
  imports: [
    CommonModule,
    CardModule,
    DividerModule,
    ProgressSpinnerModule,
    RouterModule,
    ButtonModule,
    CommentsModule
  ],
  exports: [MemeComponent],
})
export class MemeModule {}
