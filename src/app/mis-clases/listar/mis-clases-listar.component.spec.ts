import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisClasesListarComponent } from './mis-clases-listar.component';

describe('MisClasesListarComponent', () => {
  let component: MisClasesListarComponent;
  let fixture: ComponentFixture<MisClasesListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisClasesListarComponent]
    });
    fixture = TestBed.createComponent(MisClasesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
