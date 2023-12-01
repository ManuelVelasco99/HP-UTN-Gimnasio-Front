import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMultimediaComponent } from './popup-multimedia.component';

describe('PopupMultimediaComponent', () => {
  let component: PopupMultimediaComponent;
  let fixture: ComponentFixture<PopupMultimediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupMultimediaComponent]
    });
    fixture = TestBed.createComponent(PopupMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
