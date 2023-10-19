import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pizza } from 'src/app/models/pizza.models';
import { PizzaService } from 'src/app/services/pizza.service';
import { FormValidator } from 'src/app/validators/form-validators';

@Component({
  selector: 'app-pizza-baja',
  templateUrl: './pizza-baja.component.html',
  styleUrls: ['./pizza-baja.component.scss']
})
export class PizzaBajaComponent {
  formDelete!: FormGroup;
  @Input() pizza !: Pizza;

  constructor(private pizzaService : PizzaService, private snackBar: MatSnackBar) {
    this.formDelete = new FormGroup({
      nombre: new FormControl(null, {
        validators:[FormValidator.onlyLettersAndSpaces],
        updateOn:'change'
      }),
    });
  }

  onSubmit(){
    this.pizzaService.deletePizza(this.pizza).then((res)=>{
      let sb = this.snackBar.open("Registro eliminado", 'cerrar', {
        duration: 5000,
      });
      sb.onAction().subscribe(() => {
        sb.dismiss();
      });
      this.formDelete.reset();
    },error=>{
      let sb = this.snackBar.open("Error al eliminar", 'cerrar', {
        duration: 5000,
      });
      sb.onAction().subscribe(() => {
        sb.dismiss();
      });
    });
  }
  setValuesForm(pizza : Pizza){
    this.nombre.setValue(pizza.nombre);
  }
  get nombre() {
    return this.formDelete.controls['nombre'];
  }
}
