import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutListadoComponent } from './layout-listado.component';

describe('LayoutListadoComponent', () => {
  let component: LayoutListadoComponent;
  let fixture: ComponentFixture<LayoutListadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutListadoComponent]
    });
    fixture = TestBed.createComponent(LayoutListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
