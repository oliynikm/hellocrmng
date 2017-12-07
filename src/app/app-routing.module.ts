import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MailComponent} from './mail/mail.component';

const defaultRoutes: Routes = [
   {path: 'mail', component: MailComponent},
       {path: 'mail', component: MailComponent}
];


export const appRouting: ModuleWithProviders =
  RouterModule.forRoot(defaultRoutes);

