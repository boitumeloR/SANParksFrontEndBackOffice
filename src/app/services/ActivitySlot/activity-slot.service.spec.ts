import { TestBed } from '@angular/core/testing';

import { ActivitySlotService } from './activity-slot.service';

describe('ActivitySlotService', () => {
  let service: ActivitySlotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitySlotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
