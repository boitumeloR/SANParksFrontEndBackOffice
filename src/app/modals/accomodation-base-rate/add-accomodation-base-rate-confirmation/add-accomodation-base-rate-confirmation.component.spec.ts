import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccomodationBaseRateConfirmationComponent } from './add-accomodation-base-rate-confirmation.component';

describe('AddAccomodationBaseRateConfirmationComponent', () => {
  let component: AddAccomodationBaseRateConfirmationComponent;
  let fixture: ComponentFixture<AddAccomodationBaseRateConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccomodationBaseRateConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccomodationBaseRateConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
