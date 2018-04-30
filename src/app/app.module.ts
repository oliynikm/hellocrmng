import { appRouting } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MenuModule, MenuItem, ButtonModule} from 'primeng/primeng';

import { MailService } from './services/mail.service';
import { HttpModule } from '@angular/http';
import {ManagerModule} from './manager/manager.module';
import {ClientsService} from './services/clients.service';
import {MailboxService} from './services/mailbox.service';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';
import { TOKEN_NAME } from './services/auth.constant';
import { AdminModule } from './admin/admin.module';


export function authHttpServiceFactory(http: Http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'Bearer',
    tokenName: TOKEN_NAME,
    globalHeaders: [{'Content-Type': 'application/json'}],
    noJwtError: false,
    noTokenScheme: true,
    tokenGetter: (() => localStorage.getItem(TOKEN_NAME))
  }), http);
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    ManagerModule,
    AdminModule,
    MenuModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    appRouting
  ],
  providers: [
    {provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http]},
    AuthenticationService,
    UserService,
    AuthGuard,
    MailService,
    BrowserAnimationsModule,
    ClientsService,
    MailboxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
