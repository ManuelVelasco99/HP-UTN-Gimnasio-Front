import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutGeneralComponent } from './layout-general.component';

describe('LayoutGeneralComponent', () => {
  let component: LayoutGeneralComponent;
  let fixture: ComponentFixture<LayoutGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutGeneralComponent]
    });
    fixture = TestBed.createComponent(LayoutGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
