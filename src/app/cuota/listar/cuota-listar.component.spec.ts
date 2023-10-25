import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuotaListarComponent } from './cuota-listar.component';

describe('CuotaListarComponent', () => {
  let component: CuotaListarComponent;
  let fixture: ComponentFixture<CuotaListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuotaListarComponent]
    });
    fixture = TestBed.createComponent(CuotaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
