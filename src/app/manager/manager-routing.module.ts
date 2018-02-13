import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MailComponent} from './mail/mail.component';
import {ClientsComponent} from './clients/clients.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { MailDetailComponent } from './mail/mail-detail/mail-detail.component';
import { ManagerComponent } from './manager.component';
import { AuthGuard } from '../guards/auth.guard';


const managerRoutes: Routes = [
  {path: 'manager', 
    component: ManagerComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'mail', component: MailComponent},
      {path: 'mail/:emailId', component: MailDetailComponent},
      {path: 'clients', component: ClientsComponent},
      {path: 'client/:clientId', component: ClientDetailComponent}
    ]
  }];


export const managerRouting: ModuleWithProviders =
  RouterModule.forChild(managerRoutes);


