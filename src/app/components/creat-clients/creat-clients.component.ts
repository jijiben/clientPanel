import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/client';
import { Router } from '@angular/router';
import { ClientserviceService } from '../../services/clientservice.service';


@Component({
  selector: 'app-creat-clients',
  templateUrl: './creat-clients.component.html',
  styleUrls: ['./creat-clients.component.css']
})
export class CreatClientsComponent implements OnInit {


  constructor(private router: Router, private clientService:ClientserviceService) { }

  ngOnInit() {
    
  }



  log(f){
    console.log(f);
    }

  logl(f){
      console.log(f);
      }
    addClient(client:Client){
//ajout
      this.clientService.newClient(client);
//redirection
      this.router.navigate(['/clients']);
    }


}
