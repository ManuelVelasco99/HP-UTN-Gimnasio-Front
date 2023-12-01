import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorListarComponent } from './profesor-listar.component';

describe('ProfesorListarComponent', () => {
  let component: ProfesorListarComponent;
  let fixture: ComponentFixture<ProfesorListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesorListarComponent]
    });
    fixture = TestBed.createComponent(ProfesorListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
