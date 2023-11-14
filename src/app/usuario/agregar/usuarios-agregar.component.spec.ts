import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosAgregarComponent } from './usuarios-agregar.component';

describe('UsuariosAgregarComponent', () => {
  let component: UsuariosAgregarComponent;
  let fixture: ComponentFixture<UsuariosAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosAgregarComponent]
    });
    fixture = TestBed.createComponent(UsuariosAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
