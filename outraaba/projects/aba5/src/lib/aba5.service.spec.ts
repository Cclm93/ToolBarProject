import { TestBed } from '@angular/core/testing';

import { Aba5Service } from './aba5.service';

describe('Aba5Service', () => {
  let service: Aba5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Aba5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
