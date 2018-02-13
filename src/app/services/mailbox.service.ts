import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class MailboxService {

  constructor(private _http: AuthHttp) {
  }

  refreshMailbox():  Observable<any> {
    console.log('refreshing...');
    return this._http.get('/api/mailbox')
    .map((response: Response) =>  response.json() );
  }
}
