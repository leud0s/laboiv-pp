import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaAbmComponent } from './pizza-abm.component';

describe('PizzaAbmComponent', () => {
  let component: PizzaAbmComponent;
  let fixture: ComponentFixture<PizzaAbmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaAbmComponent]
    });
    fixture = TestBed.createComponent(PizzaAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
