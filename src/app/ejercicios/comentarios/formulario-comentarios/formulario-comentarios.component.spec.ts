import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComentariosComponent } from './formulario-comentarios.component';

describe('FormularioComentariosComponent', () => {
  let component: FormularioComentariosComponent;
  let fixture: ComponentFixture<FormularioComentariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioComentariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
