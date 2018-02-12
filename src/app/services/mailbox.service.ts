import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class MailboxService {

  constructor(private _http: AuthHttp) {
  }

  refreshMailbox():  Observable<IMail[]>  {
    console.log('refreshing..1');
    return this._http.get('/api/mailbox')
    .map((response: Response) =>  <IMail[]> response.json());
  }
}
