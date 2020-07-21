import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDailyConservationFeeConfirmationComponent } from './update-daily-conservation-fee-confirmation.component';

describe('UpdateDailyConservationFeeConfirmationComponent', () => {
  let component: UpdateDailyConservationFeeConfirmationComponent;
  let fixture: ComponentFixture<UpdateDailyConservationFeeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDailyConservationFeeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDailyConservationFeeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
