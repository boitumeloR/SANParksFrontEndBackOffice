import { TestBed } from '@angular/core/testing';

import { ParkGateService } from './park-gate.service';

describe('ParkGateService', () => {
  let service: ParkGateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkGateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
