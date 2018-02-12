import {Component, Input, OnInit} from '@angular/core';
import { MailService } from '../../services/mail.service';
import { SimpleChanges, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { log } from 'util';
import { MailboxService } from '../../services/mailbox.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

 @Input() clientId: string;
  errorMessage: any;
  mails: IMail[];


  constructor(private _mailService: MailService) { }

  ngOnInit(){
    this.getUnassignedMessages();
  }

  private getUnassignedMessages() {
    this._mailService.getUnassignedMessages()
      .subscribe(
        mails => this.mails = mails,
        error => this.errorMessage = <any>error
      );

  }

 
}
