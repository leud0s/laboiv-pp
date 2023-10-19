import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/models/producto.models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss']
})
export class ProductoDetalleComponent {
  user!: any;
  selected!: Producto | null;
  loading = false;
  @Input() isPublic: boolean = false;
  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario() {
    this.user = this.authService.getCurrentUser();
  }

  selectedProducto(event: Producto) {
    this.selected = event;
  }
}
