import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomMemeRoutingModule } from './random-meme-routing.module';
import { RandomMemeComponent } from './random-meme.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { MemeModule } from 'src/app/shared/components/meme/meme.module';

@NgModule({
  declarations: [
    RandomMemeComponent, 
  ],
  imports: [
    CommonModule,
    RandomMemeRoutingModule,
    ProgressSpinnerModule,
    MemeModule,
    ButtonModule,
  ],
})
export class RandomMemeModule {}
