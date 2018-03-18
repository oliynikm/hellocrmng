import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MailService } from '../../../services/mail.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mail-detail',
  templateUrl: './mail-detail.component.html',
  styleUrls: ['./mail-detail.component.css']
})
export class MailDetailComponent implements OnInit {
  private emailId: number;
  sender: IClient;
  errorMessage: any;
  mail: IMail;


  constructor(private route: ActivatedRoute,
    private mailService: MailService,
    private location: Location) { }

  ngOnInit() {
    this.emailId = +this.route.snapshot.paramMap.get('emailId');
    this.getMailDetail(this.emailId);
  }

  getMailDetail(emailId) {
    this.mailService.getMailDetails(emailId)
      .subscribe(
        mail => {this.mail = mail;
          this.getSender(mail);
        },
        error => this.errorMessage = <any>error
      );
  }

  getSender(mail: IMail) {
    if (mail.client) {
      this.sender = mail.client;
    } else if (mail.sender) {
      this.sender = new (class Client implements IClient {
        id: number;
        firstName = mail.sender.personal;
        lastName: string;
        email = mail.sender.address;
      });
    }
  }

  markRead(email: IMail) {
    email.state = 'Read';
    console.log(email);
this.mailService.updateMailDetails(email)
      .subscribe(
        savedEmail => {this.mail = savedEmail;
          this.getSender(savedEmail);
        },
        error => this.errorMessage = <any>error
      );
  }

  goBack(): void {
    this.location.back();
  }
}
