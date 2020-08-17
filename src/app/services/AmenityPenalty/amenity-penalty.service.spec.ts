import { TestBed } from '@angular/core/testing';

import { AmenityPenaltyService } from './amenity-penalty.service';

describe('AmenityPenaltyService', () => {
  let service: AmenityPenaltyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmenityPenaltyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
