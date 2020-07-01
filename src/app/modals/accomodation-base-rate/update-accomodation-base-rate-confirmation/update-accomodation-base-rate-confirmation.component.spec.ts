import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccomodationBaseRateConfirmationComponent } from './update-accomodation-base-rate-confirmation.component';

describe('UpdateAccomodationBaseRateConfirmationComponent', () => {
  let component: UpdateAccomodationBaseRateConfirmationComponent;
  let fixture: ComponentFixture<UpdateAccomodationBaseRateConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccomodationBaseRateConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccomodationBaseRateConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
