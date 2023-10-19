import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.models';
import { Observable } from 'rxjs';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor( private angularFire: AngularFirestore) { }

  addProducto(producto: Producto){
    const documentRef = this.angularFire.collection('productos').doc(producto.id);
    return documentRef.set(producto);
  }

  getProductos(): Observable<Producto[]> {
    return this.angularFire.collection<Producto>('productos', ref => ref.orderBy('codigo', 'asc')).valueChanges();
  }
  getProductosStockMayorACero(): Observable<Producto[]> {
    return this.angularFire.collection<Producto>('productos', ref => {
      return ref
        .where('stock', '>', 0);
    }).valueChanges();
  }
}
