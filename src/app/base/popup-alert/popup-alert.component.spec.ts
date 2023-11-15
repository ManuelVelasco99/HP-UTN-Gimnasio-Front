import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAlertComponent } from './popup-alert.component';

describe('PopupAlertComponent', () => {
  let component: PopupAlertComponent;
  let fixture: ComponentFixture<PopupAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupAlertComponent]
    });
    fixture = TestBed.createComponent(PopupAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
