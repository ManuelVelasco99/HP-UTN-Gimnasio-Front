import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEjercicioListarComponent } from './tipo-ejercicio-listar.component';

describe('TipoEjercicioListarComponent', () => {
  let component: TipoEjercicioListarComponent;
  let fixture: ComponentFixture<TipoEjercicioListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoEjercicioListarComponent]
    });
    fixture = TestBed.createComponent(TipoEjercicioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
