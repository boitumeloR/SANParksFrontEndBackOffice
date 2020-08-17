import { TestBed } from '@angular/core/testing';

import { WildcardRateService } from './wildcard-rate.service';

describe('WildcardRateService', () => {
  let service: WildcardRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WildcardRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
