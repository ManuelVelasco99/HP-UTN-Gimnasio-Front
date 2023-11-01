import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoClaseAgregarComponent } from './tipo-clase-agregar.component';

describe('TipoClaseAgregarComponent', () => {
  let component: TipoClaseAgregarComponent;
  let fixture: ComponentFixture<TipoClaseAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoClaseAgregarComponent]
    });
    fixture = TestBed.createComponent(TipoClaseAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
