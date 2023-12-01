import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaRutinaDiaListadoEjerciciosComponent } from './consulta-rutina-dia-listado-ejercicios.component';

describe('ConsultaRutinaDiaListadoEjerciciosComponent', () => {
  let component: ConsultaRutinaDiaListadoEjerciciosComponent;
  let fixture: ComponentFixture<ConsultaRutinaDiaListadoEjerciciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaRutinaDiaListadoEjerciciosComponent]
    });
    fixture = TestBed.createComponent(ConsultaRutinaDiaListadoEjerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
