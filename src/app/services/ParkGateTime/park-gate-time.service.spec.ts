import { TestBed } from '@angular/core/testing';

import { ParkGateTimeService } from './park-gate-time.service';

describe('ParkGateTimeService', () => {
  let service: ParkGateTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkGateTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
