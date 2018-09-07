import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Client } from '../model/client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientserviceService {

  private clientCollection: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;
  clients:Observable<Client[]>;
  client: Observable<Client>;
  constructor(public afs: AngularFirestore) { 
  this.clientCollection = afs.collection<Client>('clients');//la 'clients' c la collection qu'on acréer au niveau du Firebase
    
  }

getClients(){
//snapshotchanges elle ramene l'id par contre valuechanges elle ramene tt sauf l'id
  return this.clientCollection.snapshotChanges().map(changes =>{

    return changes.map(action =>{
      const data = action.payload.doc.data() as Client;
 data.id = action.payload.doc.id;
 return data;
    })
  })

}

newClient(client: Client)
{
  this.clientCollection.add(client);
}

getClient(id: string):Observable<Client>{

this.clientDoc = this.afs.doc<Client>(`clients/${id}`);
 return this.clientDoc.valueChanges()

}

updateClient(client: Client){

  this.clientDoc=this.afs.doc(`clients/${client.id}`);
  this.clientDoc.update(client);
}
deleteClient(client:Client){
  this.clientDoc=this.afs.doc(`clients/${client.id}`);
  this.clientDoc.delete();
}

}
