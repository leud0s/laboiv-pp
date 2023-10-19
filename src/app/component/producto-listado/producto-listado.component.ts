import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from 'src/app/models/producto.models';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-listado',
  templateUrl: './producto-listado.component.html',
  styleUrls: ['./producto-listado.component.scss']
})
export class ProductoListadoComponent {
  productos : Array<Producto> = [];
  @Output() selectedProductoEvent = new EventEmitter<Producto>();
  @Input() publicDetalle: boolean = false;
  constructor(private productoService : ProductoService) {
  }
  ngOnInit(): void {
    if(this.publicDetalle === true){
      this.productoService.getProductosStockMayorACero().subscribe(res=>{
        console.log(res);
        this.productos = res;
      });
    }else{
      this.productoService.getProductos().subscribe(res=>{
        console.log(res);
        this.productos = res;
      });
    }
  } 

  onClick(producto: any) {
    this.selectedProductoEvent.emit(producto);    
  }
}
