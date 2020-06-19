import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDailyConservationFeeConfirmationComponent } from './delete-daily-conservation-fee-confirmation.component';

describe('DeleteDailyConservationFeeConfirmationComponent', () => {
  let component: DeleteDailyConservationFeeConfirmationComponent;
  let fixture: ComponentFixture<DeleteDailyConservationFeeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDailyConservationFeeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDailyConservationFeeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
