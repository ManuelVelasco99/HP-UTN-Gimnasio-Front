import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaseListarComponent } from './clase-listar.component';

describe('ClaseListarComponent', () => {
  let component: ClaseListarComponent;
  let fixture: ComponentFixture<ClaseListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaseListarComponent]
    });
    fixture = TestBed.createComponent(ClaseListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
