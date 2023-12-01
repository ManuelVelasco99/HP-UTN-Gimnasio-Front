import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthOlvideMiContraseniaComponent } from './auth-olvide-mi-contrasenia.component';

describe('AuthOlvideMiContraseniaComponent', () => {
  let component: AuthOlvideMiContraseniaComponent;
  let fixture: ComponentFixture<AuthOlvideMiContraseniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthOlvideMiContraseniaComponent]
    });
    fixture = TestBed.createComponent(AuthOlvideMiContraseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
