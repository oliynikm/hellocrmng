import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class MailService {

  constructor(private _http: AuthHttp) {
  }

  getUnassignedMessages(): Observable<IMail[]> {

    return this._http.get('/api/emails/unassigned')
     //return this._http.get('/assets/mail.json')
      .map((response: Response) =>  <IMail[]> response.json());

  }

  getClientMessages(clientId): Observable<IMail[]> {
    return this._http.get('/api/clients/'+clientId+'/emails')
      .map((response: Response) =>  <IMail[]> response.json());
  }

  getMailDetails(emailId): Observable<IMail>{
    return this._http.get('/api/emails/'+emailId)
    .map((response: Response) =>  <IMail> response.json());
  }

}
