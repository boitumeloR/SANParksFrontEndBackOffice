import { TestBed } from '@angular/core/testing';

import { AccommAddRateService } from './accomm-add-rate.service';

describe('AccommAddRateService', () => {
  let service: AccommAddRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccommAddRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
