import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDeAsistenciaComponent } from './reporte-de-asistencia.component';

describe('ReporteDeAsistenciaComponent', () => {
  let component: ReporteDeAsistenciaComponent;
  let fixture: ComponentFixture<ReporteDeAsistenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteDeAsistenciaComponent]
    });
    fixture = TestBed.createComponent(ReporteDeAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
