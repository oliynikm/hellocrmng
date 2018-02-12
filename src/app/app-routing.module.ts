import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ManagerComponent} from './manager/manager.component';
import {AuthGuard} from './guards/auth.guard'
import { LoginComponent } from './login/login.component';

const defaultRoutes: Routes = [
  {
    path: 'manager', 
  component: ManagerComponent,
  canActivate: [AuthGuard]
},
  {
    path: '**', 
    redirectTo: '/manager' }
];


export const appRouting: ModuleWithProviders =
  RouterModule.forRoot(defaultRoutes);


