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
      .map((response: Response) =>  <IMail[]> response.json());
  }

  getAllMessages(): Observable<IMail[]> {
    return this._http.get('/api/emails/')
      .map((response: Response) =>  <IMail[]> response.json());
  }

  getNewMessages(): Observable<IMail[]> {
    return this._http.get('/api/emails/unread')
      .map((response: Response) =>  <IMail[]> response.json());
  }


  getClientMessages(clientId): Observable<IMail[]> {
    return this._http.get('/api/clients/' + clientId + '/emails')
      .map((response: Response) =>  <IMail[]> response.json());
  }

  getMailDetails(emailId): Observable<IMail> {
    return this._http.get('/api/emails/' + emailId)
    .map((response: Response) =>  <IMail> response.json());
  }

  updateMailDetails(email: IMail): Observable<IMail> {
    return this._http.post('/api/emails/' + email.id, email)
    .map((response: Response) =>  <IMail> response.json());
  }
}
