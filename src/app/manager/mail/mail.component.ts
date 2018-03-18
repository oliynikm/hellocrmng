import { Component, Input, OnInit } from '@angular/core';
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
   allMessages = true;
   newMessages = false;
   unassignedMessages = false;

  constructor(private _mailService: MailService) { }

  ngOnInit() {
    this.getNewMessages();
  }

  private getUnassignedMessages() {
       this._mailService.getUnassignedMessages()
      .subscribe(
        mails => {this.mails = mails;
          this.resetFlags();
          this.unassignedMessages = true;
        },
        error => this.errorMessage = <any>error
      );
  }

  private getNewMessages() {
    this._mailService.getNewMessages()
      .subscribe(
        mails => {this.mails = mails; this.resetFlags(); this.newMessages = true; },
        error => this.errorMessage = <any>error
      );
  }

  private getAllMessages() {
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
