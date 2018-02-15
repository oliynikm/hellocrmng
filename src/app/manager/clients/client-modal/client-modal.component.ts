import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ClientsService } from '../../../services/clients.service';

@Component({
  selector: 'app-client-modal',
  templateUrl: './client-modal.component.html',
  styleUrls: ['./client-modal.component.css']
})
export class ClientModalComponent implements OnInit {
  private newClient: boolean = false;
  private display: boolean = false;
  private clientform: FormGroup;
  private errorMessage: any;
  private clientInfo: string;

  @Input() private client: IClient;
  @Output() onSaved = new EventEmitter<boolean>();

  constructor(private _clientService: ClientsService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm(this.client);
  }

  initForm(client: IClient) {
    this.clientform = this.fb.group({
      'id': new FormControl(client ? client.id : ''),
      'firstName': new FormControl(client ? client.firstName : '', Validators.required),
      'lastName': new FormControl(client ? client.lastName : '', Validators.required),
      'email': new FormControl(client ? client.email : '', [Validators.required, Validators.email])
    });
  }

  onSubmit(value: string) {

    this._clientService.saveClient(value)
      .subscribe(
      client => {
      this.client = client;
        this.onSaved.emit(true);
        this.clientInfo = JSON.stringify(this.client);
        this.display = false;
        this.initForm(null);
      },
      error => this.errorMessage = <any>error
      );
  }

  showToAdd() {
    this.newClient = true;
    this.display = true;
  }

  showToEdit(client: IClient) {
    this.newClient = false;
    this.initForm(client);
    this.display = true;
  }

}
