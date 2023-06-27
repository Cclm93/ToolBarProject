import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aba6Component } from './aba6.component';

describe('Aba6Component', () => {
  let component: Aba6Component;
  let fixture: ComponentFixture<Aba6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aba6Component]
    });
    fixture = TestBed.createComponent(Aba6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
