import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartidorListadoComponent } from './repartidor-listado.component';

describe('RepartidorListadoComponent', () => {
  let component: RepartidorListadoComponent;
  let fixture: ComponentFixture<RepartidorListadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepartidorListadoComponent]
    });
    fixture = TestBed.createComponent(RepartidorListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
