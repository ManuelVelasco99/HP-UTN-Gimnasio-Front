import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupConfirmacionComponent } from './popup-confirmacion.component';

describe('PopupConfirmacionComponent', () => {
  let component: PopupConfirmacionComponent;
  let fixture: ComponentFixture<PopupConfirmacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupConfirmacionComponent]
    });
    fixture = TestBed.createComponent(PopupConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
