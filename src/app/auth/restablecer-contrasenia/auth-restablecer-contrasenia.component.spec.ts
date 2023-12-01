import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRestablecerContraseniaComponent } from './auth-restablecer-contrasenia.component';

describe('AuthRestablecerContraseniaComponent', () => {
  let component: AuthRestablecerContraseniaComponent;
  let fixture: ComponentFixture<AuthRestablecerContraseniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthRestablecerContraseniaComponent]
    });
    fixture = TestBed.createComponent(AuthRestablecerContraseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
