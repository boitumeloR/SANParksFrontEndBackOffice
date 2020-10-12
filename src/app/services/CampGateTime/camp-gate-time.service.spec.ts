import { TestBed } from '@angular/core/testing';

import { CampGateTimeService } from './camp-gate-time.service';

describe('CampGateTimeService', () => {
  let service: CampGateTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampGateTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
