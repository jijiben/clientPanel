import { Component, OnInit } from '@angular/core';
import { ClientserviceService } from '../../services/clientservice.service';
import { Client } from '../../model/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

clients=[];
totalOwed = 0;
  constructor(public clientserviceService: ClientserviceService) { }

  ngOnInit() {
    this.recupClient();
  }

recupClient(){

return this.clientserviceService.getClients().subscribe(clients =>{ this.clients= clients; this.getTotalOwed()})
}


delete(client: Client)
{
  return this.clientserviceService.deleteClient(client);
}


getTotalOwed(){

  this.totalOwed = this.clients.reduce((total, client) => {
    return total + parseFloat(client.balance.toString());
  }, 0);
  }

}
