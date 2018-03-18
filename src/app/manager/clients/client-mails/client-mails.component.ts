import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import { MailService } from '../../../services/mail.service';
import { log } from 'util';
import { MailboxService } from '../../../services/mailbox.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-mails',
  templateUrl: './client-mails.component.html',
  styleUrls: ['./client-mails.component.css']
})
export class ClientMailsComponent implements OnInit, OnChanges {


 @Input() clientId: string;
 errorMessage: any;
 mails: IMail[];


 constructor(private route: ActivatedRoute ,
  private router: Router,
  private _mailService: MailService) { }

 ngOnInit() {
  }

 ngOnChanges(changes: SimpleChanges) {
   this.clientId = changes['clientId'].currentValue;
   if (this.clientId !== '') {
     this.geClientMessages(this.clientId);
   }
 }

 private geClientMessages(clientId) {
     this._mailService.getClientMessages(clientId)
       .subscribe(
         mails => {this.mails = mails;
         console.log(JSON.stringify(this.mails));
        },
         error => this.errorMessage = <any>error
       );
 }

}
