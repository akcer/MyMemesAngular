import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewMemeComponent } from './add-new-meme.component';

const routes: Routes = [{ path: '', component: AddNewMemeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewMemeRoutingModule {}
