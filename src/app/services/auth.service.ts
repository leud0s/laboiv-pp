import { Injectable } from '@angular/core';
import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User
} from '@angular/fire/auth';
import {
  collection,
  addDoc,
  collectionData,
  query,
  where,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  getDocs,
} from '@angular/fire/firestore';
import {AngularFirestore} from '@angular/fire/compat/firestore';
// import { User } from '../classes/user';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 
 // usersRef = collection(this.firestore, 'usuarios');

  constructor(private auth: Auth, private db: AngularFirestore) {}

  //** AUTH **
  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  getCurrentUser(){
    return this.auth.currentUser;
  }

  saveLog(email : string){
    let date = new Date();
    const fullDate = date.toLocaleDateString() + '-' + date.toLocaleTimeString();
   
    let logs = this.db.collection('usuarios');
    logs.doc().set({
      email: email,
      fecha_ingreso: fullDate
    })

  }
  //** FIRESTORE **
 /* addUserAuto(user: User) {
    return addDoc(this.usersRef, user);
  }

  getUsersObserver(): Observable<User[]> {
    return collectionData(this.usersRef, { idField: 'id' }) as Observable<
      User[]
    >;
  }

  getUsersByEmailObserver(email: string) {
    const q = query(this.usersRef, where('email', '==', email));
    return collectionData(q, { idField: 'id' }) as Observable<User[]>;
  }

  addUserById(user: User, id: string) {
    setDoc(doc(this.usersRef, id), user);
  }

  getUserById(id: string) {
    return getDoc(doc(this.usersRef, id));
  }


  //** TESTING
  setTest() {
    const usuarioTest = {
      email: 'juan@gmail.com',
      password: '123456',
      profile: 2,
      gender: 2,
      urlImg: '..',
    };

    //* Setear un documento con un id especifico, si no existe lo crea.
    //* Tiene que se un objeto normal.

    // setDoc(doc(this.usersRef, '8X0pYR650YaqYG.TESTING'), usuarioTest)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    //* Obtener un documento por su id

    // getDoc(doc(this.usersRef, '8ko70UusxiZKkRcQUmYadPca1kj1'))
    //   .then((res) => console.log(res.data()))
    //   .catch((err) => console.log(err));

    //* Obtener el primer documento de un array usando una query

    const consulta = query(
      this.usersRef,
      where('email', '==', 'juan@gmail.com')
    );
    getDocs(consulta)
      .then((res) => console.log(res.docs[0].data()))
      .catch((err) => console.log(err));
  }*/
}