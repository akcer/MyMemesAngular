import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomMemeComponent } from './random-meme.component';

const routes: Routes = [{ path: '', component: RandomMemeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomMemeRoutingModule {}
