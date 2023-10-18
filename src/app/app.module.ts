import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaRepartidorComponent } from './pages/alta-repartidor/alta-repartidor.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { RouterModule, provideRouter } from '@angular/router';
import { ModalUsersComponent } from './component/modal-users/modal-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { FormInputComponent } from './component/form-input/form-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';;
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TablaPaisesComponent } from './component/tabla-paises/tabla-paises.component';
import { FormRepartidorComponent } from './component/form-repartidor/form-repartidor.component';

@NgModule({
    declarations: [
        AppComponent,
        AltaRepartidorComponent,
        NavbarComponent,
        BienvenidoComponent,
        LoginComponent,
        SpinnerComponent,
        FormInputComponent,
        ModalUsersComponent,
        FormRepartidorComponent,
        TablaPaisesComponent
    ],
    providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideStorage(() => getStorage()),
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule
    ]
})
export class AppModule { }
