import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MailService } from '../../services/mail.service';
import { SimpleChanges, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { log } from 'util';
import { MailboxService } from '../../services/mailbox.service';
import { MailModalComponent } from './mail-modal/mail-modal.component';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  @Input() clientId: string;

  errorMessage: any;
  mails: IMail[];
   allMessages = true;
   newMessages = false;
   unassignedMessages = false;

  constructor(private _mailService: MailService) { }

  ngOnInit() {
    this.getNewMessages();
  }

   getUnassignedMessages() {
       this._mailService.getUnassignedMessages()
      .subscribe(
        mails => {this.mails = mails;
          this.resetFlags();
          this.unassignedMessages = true;
        },
        error => this.errorMessage = <any>error
      );
  }

  getNewMessages() {
    this._mailService.getNewMessages()
      .subscribe(
        mails => {this.mails = mails; this.resetFlags(); this.newMessages = true; },
        error => this.errorMessage = <any>error
      );
  }

   getAllMessages() {
    this._mailService.getAllMessages()
      .subscribe(
        mails => {this.mails = mails; this.resetFlags(); this.allMessages = true; },
        error => this.errorMessage = <any>error
      );
  }

  private resetFlags() {
    this.allMessages = false;
    this.newMessages = false;
    this.unassignedMessages = false;
  }


}
