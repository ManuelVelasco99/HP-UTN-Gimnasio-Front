import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaRutinaComponent } from './consulta-rutina.component';

describe('ConsultaRutinaComponent', () => {
  let component: ConsultaRutinaComponent;
  let fixture: ComponentFixture<ConsultaRutinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaRutinaComponent]
    });
    fixture = TestBed.createComponent(ConsultaRutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
