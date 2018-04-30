import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { adminRouting } from './admin-routing.module';
import { LogComponent } from './log/log.component';
import { ConfigComponent } from './config/config.component';

@NgModule({
  imports: [
    CommonModule,
    adminRouting
  ],
  declarations: [AdminComponent, LogComponent, ConfigComponent]
})
export class AdminModule { }
