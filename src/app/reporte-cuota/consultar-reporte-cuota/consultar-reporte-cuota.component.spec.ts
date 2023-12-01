import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarReporteCuotaComponent } from './consultar-reporte-cuota.component';

describe('ConsultarReporteCuotaComponent', () => {
  let component: ConsultarReporteCuotaComponent;
  let fixture: ComponentFixture<ConsultarReporteCuotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarReporteCuotaComponent]
    });
    fixture = TestBed.createComponent(ConsultarReporteCuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
