import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  
  clients = [];
  constructor(public clientService: ClientService) { }

  ngOnInit() {
    this.recupClients();
  }

  recupClients() {
    this.clientService.getClients().subscribe(clients => {
      console.log(clients);
      this.clients = clients
    });
  }

}
