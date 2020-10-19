import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayConservationFeeComponent } from './pay-conservation-fee.component';

describe('PayConservationFeeComponent', () => {
  let component: PayConservationFeeComponent;
  let fixture: ComponentFixture<PayConservationFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayConservationFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayConservationFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
