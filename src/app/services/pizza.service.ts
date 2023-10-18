import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Pizza } from '../models/pizza.models';
import { Observable } from 'rxjs';
import {AngularFirestore} from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  pizzaRef = collection(this.firestore, 'pizzas')

  constructor(private firestore : Firestore, private angularFire: AngularFirestore) { }

  addPizza(pizza: Pizza){
    return addDoc(this.pizzaRef, pizza);
  }

  getPizzas(): Observable<Pizza[]> {
    return this.angularFire.collection<Pizza>('pizzas', ref => ref.orderBy('precio', 'asc')).valueChanges();
  }

  updatePizza(pizza : Pizza){
    const updatedPizza = {
      nombre: pizza.nombre,
      ingredientes: pizza.ingredientes,
      precio: pizza.precio,
      peso: pizza.peso,
    };
    return updateDoc(doc(this.pizzaRef,pizza.id), updatedPizza)
  }

  deletePizza(id: string){
    return deleteDoc(doc(this.pizzaRef,id));
  }
}