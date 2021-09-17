import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleMemeRoutingModule } from './single-meme-routing.module';
import { SingleMemeComponent } from './single-meme.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MemeModule } from 'src/app/shared/components/meme/meme.module';

@NgModule({
  declarations: [SingleMemeComponent],
  imports: [
    CommonModule,
    SingleMemeRoutingModule,
    ProgressSpinnerModule,
    MemeModule,
  ],
})
export class SingleMemeModule {}
