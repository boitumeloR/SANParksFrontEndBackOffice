import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDailyConservationFeeSuccessfulComponent } from './add-daily-conservation-fee-successful.component';

describe('AddDailyConservationFeeSuccessfulComponent', () => {
  let component: AddDailyConservationFeeSuccessfulComponent;
  let fixture: ComponentFixture<AddDailyConservationFeeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDailyConservationFeeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDailyConservationFeeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
