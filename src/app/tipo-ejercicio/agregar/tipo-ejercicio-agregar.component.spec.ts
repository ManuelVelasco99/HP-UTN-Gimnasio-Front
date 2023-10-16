import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEjercicioAgregarComponent } from './tipo-ejercicio-agregar.component';

describe('TipoEjercicioAgregarComponent', () => {
  let component: TipoEjercicioAgregarComponent;
  let fixture: ComponentFixture<TipoEjercicioAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoEjercicioAgregarComponent]
    });
    fixture = TestBed.createComponent(TipoEjercicioAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
