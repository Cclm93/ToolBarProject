import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aba7Component } from './aba7.component';

describe('Aba7Component', () => {
  let component: Aba7Component;
  let fixture: ComponentFixture<Aba7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aba7Component]
    });
    fixture = TestBed.createComponent(Aba7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
