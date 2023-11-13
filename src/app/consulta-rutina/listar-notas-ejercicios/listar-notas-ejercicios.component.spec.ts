import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNotasEjerciciosComponent } from './listar-notas-ejercicios.component';

describe('ListarNotasEjerciciosComponent', () => {
  let component: ListarNotasEjerciciosComponent;
  let fixture: ComponentFixture<ListarNotasEjerciciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarNotasEjerciciosComponent]
    });
    fixture = TestBed.createComponent(ListarNotasEjerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
