import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinaElementoListarComponent } from './maquina-elemento-listar.component';

describe('MaquinaElementoListarComponent', () => {
  let component: MaquinaElementoListarComponent;
  let fixture: ComponentFixture<MaquinaElementoListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaquinaElementoListarComponent]
    });
    fixture = TestBed.createComponent(MaquinaElementoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
