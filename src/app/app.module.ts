import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaRepartidorComponent } from './pages/alta-repartidor/alta-repartidor.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from './environments/environments';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { ModalUsersComponent } from './component/modal-users/modal-users.component';

import { SpinnerComponent } from './component/spinner/spinner.component';
import { FormInputComponent } from './component/form-input/form-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AltaRepartidorComponent,
    NavbarComponent,
    BienvenidoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
     
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
