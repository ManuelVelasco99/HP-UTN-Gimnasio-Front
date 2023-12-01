import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecioCuotaAgregarComponent } from './precio-cuota-agregar.component';

describe('PrecioCuotaAgregarComponent', () => {
  let component: PrecioCuotaAgregarComponent;
  let fixture: ComponentFixture<PrecioCuotaAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrecioCuotaAgregarComponent]
    });
    fixture = TestBed.createComponent(PrecioCuotaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
