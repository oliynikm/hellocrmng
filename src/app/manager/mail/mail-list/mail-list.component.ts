import {Component, Input, OnInit, SimpleChanges, OnChanges, ViewChild} from '@angular/core';
import { MailService } from '../../../services/mail.service';
import { log } from 'util';
import { MailboxService } from '../../../services/mailbox.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { MailModalComponent } from '../mail-modal/mail-modal.component';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit, OnChanges {

  @Input() mails: IMail[];
  @ViewChild('mailModal') mailModal: MailModalComponent;
  selectedEmail: IMail;

   constructor(private route: ActivatedRoute ,
    private router: Router,
    private _mailService: MailService) { }

   ngOnInit() {
    }

   ngOnChanges(changes: SimpleChanges) {
     this.mails = changes['mails'].currentValue;
   }

   goToMailDetails(id) {
    this.router.navigate(['manager/emails', id]);
  }

  createMessage(): void {
    this.mailModal.createNewMessage(null);
    }

}
