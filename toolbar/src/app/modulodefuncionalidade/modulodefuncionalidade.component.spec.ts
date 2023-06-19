import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulodefuncionalidadeComponent } from './modulodefuncionalidade.component';

describe('ModulodefuncionalidadeComponent', () => {
  let component: ModulodefuncionalidadeComponent;
  let fixture: ComponentFixture<ModulodefuncionalidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModulodefuncionalidadeComponent]
    });
    fixture = TestBed.createComponent(ModulodefuncionalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
