import { Component, OnInit, ViewChild } from '@angular/core';
import {ClientsService} from '../../services/clients.service';
import { MailService } from '../../services/mail.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ClientModalComponent } from './client-modal/client-modal.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  errorMessage: any;
  clients: IClient[];
  selectedClient: IClient;
  selectedClientId = '';
  display = false;
  modal = true;

@ViewChild('clientModal') clientModal: ClientModalComponent;

  constructor(private route: ActivatedRoute ,
    private router: Router,
    private _clientService: ClientsService) { }

  ngOnInit() {
    this.getClients();
  }

  private getClients() {
    this.clients = null;
    this._clientService.getClients()
      .subscribe(
        clients => this.clients = clients,
        error => this.errorMessage = <any>error
      );

  }
  getClientMessages(client) {
    if ( client.id !== '') {
      this.selectedClientId = client.id;
    }
  }

  goToClientDetails(id) {
    this.router.navigate(['manager/clients', id]);
  }

addClient() {
this.clientModal.showToAdd();
}

onSaved(saved: boolean) {
  if (saved) {
    this.getClients();
  }
}



}
