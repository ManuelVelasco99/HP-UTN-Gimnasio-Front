import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinaElementoAgregarComponent } from './maquina-elemento-agregar.component';

describe('MaquinaElementoAgregarComponent', () => {
  let component: MaquinaElementoAgregarComponent;
  let fixture: ComponentFixture<MaquinaElementoAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaquinaElementoAgregarComponent]
    });
    fixture = TestBed.createComponent(MaquinaElementoAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
