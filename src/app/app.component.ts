import { Component, ChangeDetectorRef, OnInit, AfterViewChecked } from '@angular/core';
import {PanelMenuModule, MenuModule, MenuItem} from 'primeng/primeng';
import { MailboxService } from './services/mailbox.service';
import { UserService } from './services/user.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
  items: MenuItem[];
  title = 'app';

  constructor(private router: Router,
    private route: ActivatedRoute,
    private _mailboxService: MailboxService,
     private userService: UserService ,
     private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.items = [
  ];
}


private refreshMailbox() {
  this._mailboxService.refreshMailbox()
  .subscribe(
    t => console.log(t.message)
  );
// TODO: show message 'refreshed'
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
