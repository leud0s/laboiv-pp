import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaBajaComponent } from './pizza-baja.component';

describe('PizzaBajaComponent', () => {
  let component: PizzaBajaComponent;
  let fixture: ComponentFixture<PizzaBajaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaBajaComponent]
    });
    fixture = TestBed.createComponent(PizzaBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
