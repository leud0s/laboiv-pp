import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDetallePublicoComponent } from './producto-detalle-publico.component';

describe('ProductoDetallePublicoComponent', () => {
  let component: ProductoDetallePublicoComponent;
  let fixture: ComponentFixture<ProductoDetallePublicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoDetallePublicoComponent]
    });
    fixture = TestBed.createComponent(ProductoDetallePublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
