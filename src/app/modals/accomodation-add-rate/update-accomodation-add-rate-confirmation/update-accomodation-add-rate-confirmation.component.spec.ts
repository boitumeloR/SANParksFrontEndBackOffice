import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccomodationAddRateConfirmationComponent } from './update-accomodation-add-rate-confirmation.component';

describe('UpdateAccomodationAddRateConfirmationComponent', () => {
  let component: UpdateAccomodationAddRateConfirmationComponent;
  let fixture: ComponentFixture<UpdateAccomodationAddRateConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccomodationAddRateConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccomodationAddRateConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
