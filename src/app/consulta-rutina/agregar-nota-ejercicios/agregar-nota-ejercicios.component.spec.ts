import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarNotaEjerciciosComponent } from './agregar-nota-ejercicios.component';

describe('AgregarNotaEjerciciosComponent', () => {
  let component: AgregarNotaEjerciciosComponent;
  let fixture: ComponentFixture<AgregarNotaEjerciciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarNotaEjerciciosComponent]
    });
    fixture = TestBed.createComponent(AgregarNotaEjerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
