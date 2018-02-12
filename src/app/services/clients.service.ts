import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';


@Injectable()
export class ClientsService {
    errors: any;

    constructor(private _http: AuthHttp) {
    }

    getClients(): Observable<IClient[]> {

        return this._http.get('/api/clients')
            .map((response: Response) => <IClient[]>response.json());
    }


    getClientDetails(clientId: number): Observable<IClient> {

        return this._http.get('/api/clients/' + clientId)
            .map((response: Response) => <IClient>response.json());
    }



    saveClient(client): Observable<IClient> {
        
                return this._http.post('/api/clients/',client)
                    .map((response: Response) => <IClient>response.json());
            }

}

