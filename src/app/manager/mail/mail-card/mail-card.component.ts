import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mail-card',
  templateUrl: './mail-card.component.html',
  styleUrls: ['./mail-card.component.css']
})
export class MailCardComponent implements OnInit {

@Input() mail: IMail;

  constructor() { }

  ngOnInit() {
  }

}
