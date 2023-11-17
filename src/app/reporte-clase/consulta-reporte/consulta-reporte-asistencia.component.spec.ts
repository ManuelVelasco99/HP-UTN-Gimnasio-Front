import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaReporteAsistenciaComponent } from './consulta-reporte-asistencia.component';

describe('ConsultaReporteAsistenciaComponent', () => {
  let component: ConsultaReporteAsistenciaComponent;
  let fixture: ComponentFixture<ConsultaReporteAsistenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaReporteAsistenciaComponent]
    });
    fixture = TestBed.createComponent(ConsultaReporteAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
