import { Component, EventEmitter, Output } from '@angular/core';
import { Repartidor } from 'src/app/models/repartidor.models';
import { RepartidorService } from 'src/app/services/repartidor.service';

@Component({
  selector: 'app-repartidor-listado',
  templateUrl: './repartidor-listado.component.html',
  styleUrls: ['./repartidor-listado.component.scss']
})
export class RepartidorListadoComponent {
  repartidores : Array<Repartidor> = [];
  @Output() selectedRepartidorEvent = new EventEmitter<Repartidor>();

  constructor(private repartidorService : RepartidorService) {
  }
  ngOnInit(): void {
    this.repartidorService.getRepartidores().subscribe(res=>{
      console.log(res);
      this.repartidores = res;
    })
  } 

  onClick(repartidor: any) {
    this.selectedRepartidorEvent.emit(repartidor);    
  }
}
