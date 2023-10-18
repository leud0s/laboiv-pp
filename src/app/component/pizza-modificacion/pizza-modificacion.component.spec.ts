import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaModificacionComponent } from './pizza-modificacion.component';

describe('PizzaModificacionComponent', () => {
  let component: PizzaModificacionComponent;
  let fixture: ComponentFixture<PizzaModificacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaModificacionComponent]
    });
    fixture = TestBed.createComponent(PizzaModificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
