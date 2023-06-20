import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aba4Component } from './aba4.component';

describe('Aba4Component', () => {
  let component: Aba4Component;
  let fixture: ComponentFixture<Aba4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aba4Component]
    });
    fixture = TestBed.createComponent(Aba4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
