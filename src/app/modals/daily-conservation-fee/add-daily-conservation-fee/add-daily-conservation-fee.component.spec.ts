import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDailyConservationFeeComponent } from './add-daily-conservation-fee.component';

describe('AddDailyConservationFeeComponent', () => {
  let component: AddDailyConservationFeeComponent;
  let fixture: ComponentFixture<AddDailyConservationFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDailyConservationFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDailyConservationFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
