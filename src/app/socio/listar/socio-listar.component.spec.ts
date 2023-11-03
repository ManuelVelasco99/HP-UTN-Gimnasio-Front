import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioListarComponent } from './socio-listar.component';

describe('SocioListarComponent', () => {
  let component: SocioListarComponent;
  let fixture: ComponentFixture<SocioListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocioListarComponent]
    });
    fixture = TestBed.createComponent(SocioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
