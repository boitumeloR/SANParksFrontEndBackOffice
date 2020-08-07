import { TestBed } from '@angular/core/testing';

import { AmenityTypeService } from './amenity-type.service';

describe('AmenityTypeService', () => {
  let service: AmenityTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmenityTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
