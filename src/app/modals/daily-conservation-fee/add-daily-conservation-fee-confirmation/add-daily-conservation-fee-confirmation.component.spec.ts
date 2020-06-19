import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDailyConservationFeeConfirmationComponent } from './add-daily-conservation-fee-confirmation.component';

describe('AddDailyConservationFeeConfirmationComponent', () => {
  let component: AddDailyConservationFeeConfirmationComponent;
  let fixture: ComponentFixture<AddDailyConservationFeeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDailyConservationFeeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDailyConservationFeeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
