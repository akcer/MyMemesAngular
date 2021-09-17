import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutRoutingModule } from './logout-routing.module';
import { LogoutComponent } from './logout.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [LogoutComponent],
  imports: [CommonModule, LogoutRoutingModule, ButtonModule],
})
export class LogoutModule {}
