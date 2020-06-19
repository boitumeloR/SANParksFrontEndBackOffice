import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDailyConservationFeeComponent } from './update-daily-conservation-fee.component';

describe('UpdateDailyConservationFeeComponent', () => {
  let component: UpdateDailyConservationFeeComponent;
  let fixture: ComponentFixture<UpdateDailyConservationFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDailyConservationFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDailyConservationFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
