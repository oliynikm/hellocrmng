import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../guards/auth.guard';
import { ConfigComponent } from './config/config.component';
import { LogComponent } from './log/log.component';



const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],

        canActivateChild: [AuthGuard],
        children: [
          { path: 'config', component: ConfigComponent },
          { path: 'log', component: LogComponent }
        ]

  }];


export const adminRouting: ModuleWithProviders =
  RouterModule.forChild(adminRoutes);


