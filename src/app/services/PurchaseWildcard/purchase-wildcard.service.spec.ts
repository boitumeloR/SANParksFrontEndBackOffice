import { TestBed } from '@angular/core/testing';

import { PurchaseWildcardService } from './purchase-wildcard.service';

describe('PurchaseWildcardService', () => {
  let service: PurchaseWildcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseWildcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
