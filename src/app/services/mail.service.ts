import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MailService {

  constructor(private _http: Http) {
  }

  getMails(): Observable<IMail[]> {

   // return this._http.get('http://localhost:8080/api/users').map((response: Response) => <IMail[]> response.json());
     return this._http.get('/assets/mail.json').map((response: Response) => <IMail[]> response.json());
  }
}
