import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoSocioIngresarComponent } from './ingreso-socio-ingresar.component';

describe('IngresoSocioIngresarComponent', () => {
  let component: IngresoSocioIngresarComponent;
  let fixture: ComponentFixture<IngresoSocioIngresarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresoSocioIngresarComponent]
    });
    fixture = TestBed.createComponent(IngresoSocioIngresarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
