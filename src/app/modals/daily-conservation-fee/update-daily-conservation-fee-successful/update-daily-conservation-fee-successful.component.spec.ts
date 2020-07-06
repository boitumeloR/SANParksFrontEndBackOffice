import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDailyConservationFeeSuccessfulComponent } from './update-daily-conservation-fee-successful.component';

describe('UpdateDailyConservationFeeSuccessfulComponent', () => {
  let component: UpdateDailyConservationFeeSuccessfulComponent;
  let fixture: ComponentFixture<UpdateDailyConservationFeeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDailyConservationFeeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDailyConservationFeeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
