import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioVerificarComponent } from './usuario-verificar.component';

describe('UsuarioVerificarComponent', () => {
  let component: UsuarioVerificarComponent;
  let fixture: ComponentFixture<UsuarioVerificarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioVerificarComponent]
    });
    fixture = TestBed.createComponent(UsuarioVerificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
