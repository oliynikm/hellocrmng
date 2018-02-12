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
  errorMessage: any;
  mail: IMail;
 

  constructor(private route: ActivatedRoute,
    private _mailService: MailService,
    private location: Location) { }

  ngOnInit() {
    this.emailId = +this.route.snapshot.paramMap.get('emailId');
    this.getMailDetail(this.emailId);
  }

  getMailDetail(emailId) {
    this._mailService.getMailDetails(emailId)
      .subscribe(
      mail => this.mail = mail,
      error => this.errorMessage = <any>error
      );
  }

  goBack(): void {
    this.location.back();
  }
}
