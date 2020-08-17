import { TestBed } from '@angular/core/testing';

import { CampTypeService } from './camp-type.service';

describe('CampTypeService', () => {
  let service: CampTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
