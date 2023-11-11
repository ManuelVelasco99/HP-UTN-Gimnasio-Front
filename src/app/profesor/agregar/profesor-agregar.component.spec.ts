import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorAgregarComponent } from './profesor-agregar.component';

describe('ProfesorAgregarComponent', () => {
  let component: ProfesorAgregarComponent;
  let fixture: ComponentFixture<ProfesorAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesorAgregarComponent]
    });
    fixture = TestBed.createComponent(ProfesorAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
