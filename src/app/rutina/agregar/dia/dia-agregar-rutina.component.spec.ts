import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaAgregarRutinaComponent } from './dia-agregar-rutina.component';

describe('DiaAgregarRutinaComponent', () => {
  let component: DiaAgregarRutinaComponent;
  let fixture: ComponentFixture<DiaAgregarRutinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiaAgregarRutinaComponent]
    });
    fixture = TestBed.createComponent(DiaAgregarRutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
