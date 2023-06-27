import { TestBed } from '@angular/core/testing';

import { Aba6Service } from './aba6.service';

describe('Aba6Service', () => {
  let service: Aba6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Aba6Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
