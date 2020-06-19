import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyConservationFeeComponent } from './daily-conservation-fee.component';

describe('DailyConservationFeeComponent', () => {
  let component: DailyConservationFeeComponent;
  let fixture: ComponentFixture<DailyConservationFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyConservationFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyConservationFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
