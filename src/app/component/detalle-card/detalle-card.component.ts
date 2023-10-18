import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Repartidor } from 'src/app/models/repartidor.models';

@Component({
  selector: 'app-detalle-card',
  templateUrl: './detalle-card.component.html',
  styleUrls: ['./detalle-card.component.scss']
})
export class DetalleCardComponent {
  @Input() repartidor !: Repartidor | null;
  @Output() cleanRepartidorEvent = new EventEmitter<null>;

  cleanRepartidor(){
    this.cleanRepartidorEvent.emit(null);
  }
}
