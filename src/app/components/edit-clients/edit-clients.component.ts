import { Component, OnInit } from '@angular/core';
import { ClientserviceService } from '../../services/clientservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '../../model/client';
import { Route} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-edit-clients',
  templateUrl: './edit-clients.component.html',
  styleUrls: ['./edit-clients.component.css']
})
export class EditClientsComponent implements OnInit {

  id;
  client:Client;
  constructor(
              private clientService:ClientserviceService, 
              public router:ActivatedRoute, private route: Router,
              private flashMessage:FlashMessagesService
            ) {}


  ngOnInit() {
    this.id = this.router.snapshot.params[('id')]
    this.clientService.getClient(this.id).subscribe(client => this.client=client)

   
  }



  editClient(client:Client){
  this.client.id = this.router.snapshot.params[('id')];
   this.clientService.updateClient(this.client);
   this.flashMessage.show('le changement du client à ete fait avec succes',{cssClass:'alert alert-dark', timeout:10000});
   this.route.navigate(['/clients']);
        }
    
  
}
