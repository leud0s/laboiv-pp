import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaListaComponent } from './pizza-lista.component';

describe('PizzaListaComponent', () => {
  let component: PizzaListaComponent;
  let fixture: ComponentFixture<PizzaListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaListaComponent]
    });
    fixture = TestBed.createComponent(PizzaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
