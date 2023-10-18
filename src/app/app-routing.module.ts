import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { LoginComponent } from './pages/login/login.component';
import { AltaRepartidorComponent } from './pages/alta-repartidor/alta-repartidor.component';
import { LoginGuard } from './guards/login.guards';
const routes: Routes = [
  {path: '', redirectTo: 'bienvenido', pathMatch: 'full'},
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'alta-repartidor', component: AltaRepartidorComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
