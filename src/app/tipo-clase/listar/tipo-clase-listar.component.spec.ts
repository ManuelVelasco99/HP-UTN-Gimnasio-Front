import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoClaseListarComponent } from './tipo-clase-listar.component';

describe('TipoClaseListarComponent', () => {
  let component: TipoClaseListarComponent;
  let fixture: ComponentFixture<TipoClaseListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoClaseListarComponent]
    });
    fixture = TestBed.createComponent(TipoClaseListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
