import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, getDoc, getDocs, updateDoc  } from '@angular/fire/firestore';
import { Repartidor } from '../models/repartidor.models';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RepartidorService {
  repartidorRef = collection(this.firestore, 'repartidores')

  constructor(private firestore : Firestore) { }

  addRepartidor(repartidor: Repartidor){
    return addDoc(this.repartidorRef, repartidor);
  }

  getRepartidores(): Observable<Repartidor[]>{
    return collectionData(this.repartidorRef, {idField: 'id'}) as Observable<Repartidor[]>;
  }
}
