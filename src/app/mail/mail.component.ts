import { Component, OnInit } from '@angular/core';
import { MailService } from '../services/mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
 errorMessage: any;
  mails: IMail[];

  constructor(private _mailService: MailService) { }

  ngOnInit() {
this.getMails();
  }

  private getMails() {
this._mailService.getMails()
      .subscribe(
        mails => this.mails = mails,
        error => this.errorMessage = <any>error
      );

  }


}
