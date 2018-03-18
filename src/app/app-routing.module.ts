import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';

const defaultRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '/'}
];


export const appRouting: ModuleWithProviders =
  RouterModule.forRoot(defaultRoutes);


