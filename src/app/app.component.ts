import { Component, ChangeDetectorRef } from '@angular/core';
import {PanelMenuModule,MenuModule,MenuItem} from 'primeng/primeng';
import { MailboxService } from './services/mailbox.service';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private items: MenuItem[];
  title = 'app';
  

  constructor(private router: Router,private _mailboxService: MailboxService,
     private userService: UserService , private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
    this.items = [
  ];
}


private refreshMailbox() {
  this._mailboxService.refreshMailbox()
  .subscribe(
    mails => console.log(mails)
  );
  location.reload();
}

get isUser() {
  return this.userService.isUser();
}

logout() {
  this.userService.logout();
  this.router.navigate(['/']);
}

ngAfterViewChecked() { 
  // Avoid the error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked
  this.cdRef.detectChanges();
}

}
