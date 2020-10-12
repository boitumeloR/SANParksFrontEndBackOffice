import { TestBed } from '@angular/core/testing';

import { AccommBaseRateService } from './accomm-base-rate.service';

describe('AccommBaseRateService', () => {
  let service: AccommBaseRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccommBaseRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
