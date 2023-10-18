import { Component } from '@angular/core';
import { Repartidor } from 'src/app/models/repartidor.models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-repartidor-detalle',
  templateUrl: './repartidor-detalle.component.html',
  styleUrls: ['./repartidor-detalle.component.scss']
})
export class RepartidorDetalleComponent {
  user!: any;
  selected!: Repartidor | null;
  loading = false;
  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario() {
    let user = this.authService.getCurrentUser();
  }

  selectedRepartidor(event: Repartidor) {
    this.selected = event;
  }
}
