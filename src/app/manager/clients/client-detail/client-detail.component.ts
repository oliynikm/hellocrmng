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

  clientId: number;
  errorMessage: any;
  client: IClient;

  constructor(private route: ActivatedRoute,
    private _clientService: ClientsService,
    private location: Location) { }

  ngOnInit() {
    this.clientId = +this.route.snapshot.paramMap.get('clientId');
    console.log(this.clientId);
  }



  goBack(): void {
    this.location.back();
  }

}
