import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecioCuotaListarComponent } from './precio-cuota-listar.component';

describe('PrecioCuotaListarComponent', () => {
  let component: PrecioCuotaListarComponent;
  let fixture: ComponentFixture<PrecioCuotaListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrecioCuotaListarComponent]
    });
    fixture = TestBed.createComponent(PrecioCuotaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
