import { TestBed } from '@angular/core/testing';

import { DailyConservationFeeService } from './daily-conservation-fee.service';

describe('DailyConservationFeeService', () => {
  let service: DailyConservationFeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyConservationFeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
