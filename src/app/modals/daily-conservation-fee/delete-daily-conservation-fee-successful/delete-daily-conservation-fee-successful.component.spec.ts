import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDailyConservationFeeSuccessfulComponent } from './delete-daily-conservation-fee-successful.component';

describe('DeleteDailyConservationFeeSuccessfulComponent', () => {
  let component: DeleteDailyConservationFeeSuccessfulComponent;
  let fixture: ComponentFixture<DeleteDailyConservationFeeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDailyConservationFeeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDailyConservationFeeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
