import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarReporteCuotaComponent } from './generar-reporte-cuota.component';

describe('GenerarReporteCuotaComponent', () => {
  let component: GenerarReporteCuotaComponent;
  let fixture: ComponentFixture<GenerarReporteCuotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerarReporteCuotaComponent]
    });
    fixture = TestBed.createComponent(GenerarReporteCuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
