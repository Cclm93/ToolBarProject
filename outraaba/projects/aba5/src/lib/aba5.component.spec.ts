import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aba5Component } from './aba5.component';

describe('Aba5Component', () => {
  let component: Aba5Component;
  let fixture: ComponentFixture<Aba5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aba5Component]
    });
    fixture = TestBed.createComponent(Aba5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
