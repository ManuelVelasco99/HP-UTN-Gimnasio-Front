import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuotaAgregarComponent } from './cuota-agregar.component';

describe('CuotaAgregarComponent', () => {
  let component: CuotaAgregarComponent;
  let fixture: ComponentFixture<CuotaAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuotaAgregarComponent]
    });
    fixture = TestBed.createComponent(CuotaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
