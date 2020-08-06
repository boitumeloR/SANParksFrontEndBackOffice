import { TestBed } from '@angular/core/testing';

import { WildcardClusterService } from './wildcard-cluster.service';

describe('WildcardClusterService', () => {
  let service: WildcardClusterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WildcardClusterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
