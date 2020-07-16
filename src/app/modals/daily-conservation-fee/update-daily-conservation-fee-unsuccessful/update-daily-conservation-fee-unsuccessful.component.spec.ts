import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDailyConservationFeeUnsuccessfulComponent } from './update-daily-conservation-fee-unsuccessful.component';

describe('UpdateDailyConservationFeeUnsuccessfulComponent', () => {
  let component: UpdateDailyConservationFeeUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateDailyConservationFeeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDailyConservationFeeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDailyConservationFeeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
