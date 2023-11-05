import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioAgregarComponent } from './socio-agregar.component';

describe('SocioAgregarComponent', () => {
  let component: SocioAgregarComponent;
  let fixture: ComponentFixture<SocioAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocioAgregarComponent]
    });
    fixture = TestBed.createComponent(SocioAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
