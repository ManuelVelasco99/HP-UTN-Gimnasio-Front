import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaAgregarComponent } from './rutina-agregar.component';

describe('RutinaAgregarComponent', () => {
  let component: RutinaAgregarComponent;
  let fixture: ComponentFixture<RutinaAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutinaAgregarComponent]
    });
    fixture = TestBed.createComponent(RutinaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
