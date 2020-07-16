import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDailyConservationFeeUnsuccessfulComponent } from './delete-daily-conservation-fee-unsuccessful.component';

describe('DeleteDailyConservationFeeUnsuccessfulComponent', () => {
  let component: DeleteDailyConservationFeeUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteDailyConservationFeeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDailyConservationFeeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDailyConservationFeeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
