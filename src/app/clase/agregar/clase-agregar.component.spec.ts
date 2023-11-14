import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaseAgregarComponent } from './clase-agregar.component';

describe('ClaseAgregarComponent', () => {
  let component: ClaseAgregarComponent;
  let fixture: ComponentFixture<ClaseAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaseAgregarComponent]
    });
    fixture = TestBed.createComponent(ClaseAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
