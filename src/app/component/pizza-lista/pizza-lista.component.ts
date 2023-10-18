import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.models';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-lista',
  templateUrl: './pizza-lista.component.html',
  styleUrls: ['./pizza-lista.component.scss']
})
export class PizzaListaComponent {
  @Input() pizzas: Pizza[] = [];
  @Input() showTable: boolean  = true;
  @Output() selectPizzaEvent = new EventEmitter<Pizza>();

  constructor(private pizzaService : PizzaService) {
    
  }
  ngOnInit(): void {
  this.pizzaService.getPizzas().subscribe(res=>{
    this.pizzas = res;
  })
  }
  selectPizza(id: string){
    this.pizzas.forEach((element) => {
      if (element.id === id) this.selectPizzaEvent.emit(element);
    });
  }
}
