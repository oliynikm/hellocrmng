import { Component, ChangeDetectorRef, OnInit, AfterViewChecked } from '@angular/core';

import { MailboxService } from './services/mailbox.service';
import { UserService } from './services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'app';

  constructor(private router: Router,
    private route: ActivatedRoute,
    private _mailboxService: MailboxService,
    private userService: UserService,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
  }


  private refreshMailbox() {
    this._mailboxService.refreshMailbox()
      .subscribe(
        t => alert(t.message)
      );
  }

  get isUser() {
    return this.userService.isUser();
  }
  get userName() {
    return this.userService.getUserName();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  ngAfterViewChecked() {
    // Avoid the error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked
    this.cdRef.detectChanges();
  }

}
