import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleMemeComponent } from './single-meme.component';

const routes: Routes = [{ path: '', component: SingleMemeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleMemeRoutingModule {}
