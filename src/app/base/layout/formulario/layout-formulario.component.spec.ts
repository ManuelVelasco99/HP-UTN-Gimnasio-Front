import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutFormularioComponent } from './layout-formulario.component';

describe('LayoutFormularioComponent', () => {
  let component: LayoutFormularioComponent;
  let fixture: ComponentFixture<LayoutFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutFormularioComponent]
    });
    fixture = TestBed.createComponent(LayoutFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
