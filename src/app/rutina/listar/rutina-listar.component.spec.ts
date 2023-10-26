import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaListarComponent } from './rutina-listar.component';

describe('RutinaListarComponent', () => {
  let component: RutinaListarComponent;
  let fixture: ComponentFixture<RutinaListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutinaListarComponent]
    });
    fixture = TestBed.createComponent(RutinaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
