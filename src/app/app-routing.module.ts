import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { LoginComponent } from './pages/login/login.component';
import { AltaRepartidorComponent } from './pages/alta-repartidor/alta-repartidor.component';
import { LoginGuard } from './guards/login.guards';
import { LoginAdminGuard } from './guards/login-admin.guards';
import { RepartidorDetalleComponent } from './pages/repartidor-detalle/repartidor-detalle.component';
import { PizzaAbmComponent } from './pages/pizza-abm/pizza-abm.component';
import { AltaProductoComponent } from './pages/alta-producto/alta-producto.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { ProductoDetallePublicoComponent } from './pages/producto-detalle-publico/producto-detalle-publico.component';

const routes: Routes = [
  {path: '', redirectTo: 'bienvenido', pathMatch: 'full'},
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'alta-repartidor', component: AltaRepartidorComponent,canActivate:[LoginGuard]},
  {path: 'detalle-repartidor', component: RepartidorDetalleComponent,canActivate:[LoginAdminGuard]},
  {path: 'pizza-abm', component: PizzaAbmComponent,canActivate:[LoginAdminGuard]},
  {path: 'alta-producto', component: AltaProductoComponent,canActivate:[LoginGuard]},
  {path: 'detalle-producto', component: ProductoDetalleComponent,canActivate:[LoginAdminGuard]},
  {path: 'detalle-producto-publico', component: ProductoDetallePublicoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
