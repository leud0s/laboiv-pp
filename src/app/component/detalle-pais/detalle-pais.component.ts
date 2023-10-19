import { Component, Input } from '@angular/core';
import { Repartidor } from 'src/app/models/repartidor.models';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.scss']
})
export class DetallePaisComponent {
  @Input() pais: any;
}
