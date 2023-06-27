import { TestBed } from '@angular/core/testing';

import { Aba7Service } from './aba7.service';

describe('Aba7Service', () => {
  let service: Aba7Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Aba7Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
