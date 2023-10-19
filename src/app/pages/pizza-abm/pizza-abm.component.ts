import { Component, ViewChild } from '@angular/core';
import { PizzaBajaComponent } from 'src/app/component/pizza-baja/pizza-baja.component';
import { PizzaModificacionComponent } from 'src/app/component/pizza-modificacion/pizza-modificacion.component';
import { Pizza } from 'src/app/models/pizza.models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pizza-abm',
  templateUrl: './pizza-abm.component.html',
  styleUrls: ['./pizza-abm.component.scss']
})
export class PizzaAbmComponent {
  user!: any;
  selected!: Pizza;
  loading = false;
  @ViewChild('modificar') modificar !: PizzaModificacionComponent;
  @ViewChild('eliminar') eliminar !: PizzaBajaComponent;
  constructor(private authService: AuthService){}
  ngOnInit(): void {
    this.cargarUsuario();
  }

  selectedPizza(e: any) {
    this.selected = e;
    this.modificar.setValuesForm(e);
    this.eliminar.setValuesForm(e);
  }

  pizzaCreada(e: Pizza) {
    console.log(e);
  }

  cargarUsuario() {
    this.user = this.authService.getCurrentUser();
  }
}
