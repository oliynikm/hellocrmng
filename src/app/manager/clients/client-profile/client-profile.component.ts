import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ClientModalComponent } from '../client-modal/client-modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../../../services/clients.service';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {

  @Input() clientId: string;
  errorMessage: any;
  @Input() client: IClient;
  @ViewChild('clientModal') clientModal: ClientModalComponent;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private _clientService: ClientsService) { }

  ngOnInit() {
    if (!this.client && this.clientId) {
    this.getClientDetail(this.clientId);
     }
  }

  getClientDetail(clientId) {
    if (clientId) {
    this._clientService.getClientDetails(clientId)
      .subscribe(
      client => this.client = client,
      error => this.errorMessage = <any>error
      );
    }
  }

  editClient(client: IClient) {
    this.clientModal.showToEdit(client);
    }

    goToClientInfo() {
    this.router.navigate(['manager/client', this.client.id]);
    }

    onSaved(client: IClient) {
      if (client) {
        this.client = client;
      }
    }

}
