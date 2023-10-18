import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, getDoc, getDocs, updateDoc  } from '@angular/fire/firestore';
import { Repartidor } from '../models/repartidor.models';
import { Observable } from 'rxjs';
import {AngularFirestore} from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class RepartidorService {
  repartidorRef = collection(this.firestore, 'repartidores')

  constructor(private firestore : Firestore, private angularFire: AngularFirestore) { }

  addRepartidor(repartidor: Repartidor){
    return addDoc(this.repartidorRef, repartidor);
  }

  getRepartidores(): Observable<Repartidor[]> {
    return this.angularFire.collection<Repartidor>('repartidores', ref => ref.orderBy('dni', 'asc')).valueChanges();
  }
}
