import { Component, OnInit, ViewChild, OnDestroy, Input} from '@angular/core';
import { ClientsService } from '../../../services/clients.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ClientModalComponent } from '../client-modal/client-modal.component';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  private clientId: number;
  errorMessage: any;
  client: IClient;
  @ViewChild('clientModal') clientModal: ClientModalComponent;
  
  constructor(private route: ActivatedRoute,
    private _clientService: ClientsService,
    private location: Location) { }

  ngOnInit() {
    this.clientId = +this.route.snapshot.paramMap.get('clientId');
    this.getClientDetail(this.clientId);
  }

  getClientDetail(clientId) {
    this._clientService.getClientDetails(clientId)
      .subscribe(
      client => this.client = client,
      error => this.errorMessage = <any>error
      );
  }

  goBack(): void {
    this.location.back();
  }

  editClient(client:IClient){
    this.clientModal.showToEdit(client);
    
    }

    onSaved(saved: boolean) {
      if(saved){
        this.getClientDetail(this.clientId);
      }
    }

}
