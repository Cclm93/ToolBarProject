import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaxtraComponent } from './abaxtra.component';

describe('AbaxtraComponent', () => {
  let component: AbaxtraComponent;
  let fixture: ComponentFixture<AbaxtraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbaxtraComponent]
    });
    fixture = TestBed.createComponent(AbaxtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
