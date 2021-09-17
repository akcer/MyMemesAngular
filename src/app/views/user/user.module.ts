import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutingModule, ProgressSpinnerModule, CardModule],
})
export class UserModule {}
