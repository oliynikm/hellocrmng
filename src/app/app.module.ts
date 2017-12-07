import { appRouting } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MailComponent } from './mail/mail.component';
import { MailService } from './services/mail.service';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MailComponent
  ],
  imports: [
    BrowserModule,
       HttpModule,
       Ng2BootstrapModule.forRoot(),
    appRouting
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
