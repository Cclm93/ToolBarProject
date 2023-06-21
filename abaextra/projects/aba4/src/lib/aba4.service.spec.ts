import { TestBed } from '@angular/core/testing';

import { Aba4Service } from './aba4.service';

describe('Aba4Service', () => {
  let service: Aba4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Aba4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
