import { Client } from './../model/client';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class ClientService {
  
  private clientCollection: AngularFirestoreCollection<Client>;
  constructor(public afs: AngularFirestore) {
    this.clientCollection = afs.collection<Client>('clients');
   }
   
  getClients() {
    return this.clientCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Client;
        data.id = action.payload.doc.id;
        return data;
      });
    });
  }
}
