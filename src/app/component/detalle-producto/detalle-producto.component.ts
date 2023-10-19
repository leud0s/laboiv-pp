import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from 'src/app/models/producto.models';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent {
  @Input() producto !: Producto | null;
  @Output() cleanProductoEvent = new EventEmitter<null>;

  cleanProducto(){
    this.cleanProductoEvent.emit(null);
  }
}
