import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import { MailComponent } from './mail/mail.component';
import { managerRouting } from './manager-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { BrowserModule } from '@angular/platform-browser/src/browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule, ButtonModule, DialogModule, DataTableModule} from 'primeng/primeng';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { ClientMailsComponent } from './clients/client-mails/client-mails.component';
import { ClientModalComponent } from './clients/client-modal/client-modal.component';
import { MailDetailComponent } from './mail/mail-detail/mail-detail.component';
import { MailListComponent } from './mail/mail-list/mail-list.component';
import { MailCardComponent } from './mail/mail-card/mail-card.component';
import { ClientProfileComponent } from './clients/client-profile/client-profile.component';
import { MailModalComponent } from './mail/mail-modal/mail-modal.component';
import {EditorModule} from 'primeng/editor';
import {ScrollPanelModule} from 'primeng/scrollpanel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    EditorModule,
    DataTableModule,
    ScrollPanelModule,
    managerRouting
  ],
  declarations: [
    ManagerComponent,
    MailComponent,
    ClientsComponent,
    ClientDetailComponent,
    ClientMailsComponent,
    ClientModalComponent,
    MailDetailComponent,
    MailListComponent,
    MailCardComponent,
    ClientProfileComponent,
    MailModalComponent]
})
export class ManagerModule { }
