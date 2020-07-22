import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccomodationAddRateConfirmationComponent } from './add-accomodation-add-rate-confirmation.component';

describe('AddAccomodationAddRateConfirmationComponent', () => {
  let component: AddAccomodationAddRateConfirmationComponent;
  let fixture: ComponentFixture<AddAccomodationAddRateConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccomodationAddRateConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccomodationAddRateConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
