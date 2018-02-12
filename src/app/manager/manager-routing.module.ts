import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MailComponent} from './mail/mail.component';
import {ClientsComponent} from './clients/clients.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { MailDetailComponent } from './mail/mail-detail/mail-detail.component';
import { ManagerComponent } from './manager.component';


const managerRoutes: Routes = [
  {path: 'manager/mail', component: MailComponent},
  {path: 'manager/', component: ManagerComponent},
  {path: 'manager/mail/:emailId', component: MailDetailComponent},
  {path: 'manager/clients', component: ClientsComponent},
  {path: 'manager/client/:clientId', component: ClientDetailComponent},
  {path: '**', redirectTo: 'manager/'}

];


export const managerRouting: ModuleWithProviders =
  RouterModule.forRoot(managerRoutes);


