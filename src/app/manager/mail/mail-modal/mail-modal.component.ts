import { Component, OnInit } from '@angular/core';
import { MailService } from '../../../services/mail.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MailboxService } from '../../../services/mailbox.service';


@Component({
  selector: 'app-mail-modal',
  templateUrl: './mail-modal.component.html',
  styleUrls: ['./mail-modal.component.css']
})
export class MailModalComponent implements OnInit {

    private newClient = false;
    private errorMessage: any;
    private clientInfo: string;
    display = false;
    mailform: FormGroup;

    constructor(private _mailboxService: MailboxService,
      private fb: FormBuilder) { }

      ngOnInit() {
        this.initFormClient(null);
      }

    initFormMail(mail: IMail) {
      this.mailform = this.fb.group({
        'messageTo': new FormControl(mail ?
                                    (mail.client ? mail.client.email : mail.sender ) : '' , [Validators.required, Validators.email]),
        'messageSubject': new FormControl(mail ? 'RE: ' + mail.description : '' , Validators.required),
        'message': new FormControl(mail ? '<p> </p><p> </p><p> </p>------------------<p> </p><p> </p>from: ' + mail.sender + '<p> </p>' +
                                   mail.body  : '' , Validators.required)
      });
    }

    initFormClient(client: IClient) {
      this.mailform = this.fb.group({
        'messageTo': new FormControl(client ? client.email : '' , [Validators.required, Validators.email]),
        'messageSubject': new FormControl('' , Validators.required),
        'message': new FormControl('' , Validators.required)
      });
    }

    onSubmit(value: string) {

      this._mailboxService.sendMail(value)
        .subscribe(
        message => {alert('System works in demo mode and doesn`t send emails. Message was saved but not sent');
        this.display = false;
      },
        error => this.errorMessage = <any>error
        );
    }


    showToReply(mail: IMail): any {
     this.display = true;
     this.initFormMail(mail);
    }

    createNewMessage(client: IClient): any {
      this.display = true;
      this.initFormClient(client);
     }

}
