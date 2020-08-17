import { TestBed } from '@angular/core/testing';

import { WildcardCategoryService } from './wildcard-category.service';

describe('WildcardCategoryService', () => {
  let service: WildcardCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WildcardCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
