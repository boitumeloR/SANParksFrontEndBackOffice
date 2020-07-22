import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDailyConservationFeeUnsuccessfulComponent } from './add-daily-conservation-fee-unsuccessful.component';

describe('AddDailyConservationFeeUnsuccessfulComponent', () => {
  let component: AddDailyConservationFeeUnsuccessfulComponent;
  let fixture: ComponentFixture<AddDailyConservationFeeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDailyConservationFeeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDailyConservationFeeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
