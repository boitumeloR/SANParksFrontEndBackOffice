import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDailyConservationFeeComponent } from './view-daily-conservation-fee.component';

describe('ViewDailyConservationFeeComponent', () => {
  let component: ViewDailyConservationFeeComponent;
  let fixture: ComponentFixture<ViewDailyConservationFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDailyConservationFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDailyConservationFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
