import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioAgregarRutinaComponent } from './ejercicio-agregar-rutina.component';

describe('EjercicioAgregarRutinaComponent', () => {
  let component: EjercicioAgregarRutinaComponent;
  let fixture: ComponentFixture<EjercicioAgregarRutinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjercicioAgregarRutinaComponent]
    });
    fixture = TestBed.createComponent(EjercicioAgregarRutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
