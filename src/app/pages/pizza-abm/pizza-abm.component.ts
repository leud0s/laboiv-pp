import { Component } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.models';

@Component({
  selector: 'app-pizza-abm',
  templateUrl: './pizza-abm.component.html',
  styleUrls: ['./pizza-abm.component.scss']
})
export class PizzaAbmComponent {
  user!: any;
  selected!: Pizza;
  loading = false;
  //@ViewChild('modificar') modificar !: PizzaModificacionComponent;

  ngOnInit(): void {
    this.cargarUsuario();
  }

  selectedPizza(e: any) {
    this.selected = e;
    //this.modificar.setValuesForm(e);
  }

  pizzaCreada(e: Pizza) {
    console.log(e);
  }

  cargarUsuario() {
    let user = localStorage.getItem('user');
    if (user !== null) {
      this.user = JSON.parse(user);
    }
  }
}
