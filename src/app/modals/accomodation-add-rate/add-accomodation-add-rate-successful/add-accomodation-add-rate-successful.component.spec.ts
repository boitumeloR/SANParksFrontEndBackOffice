import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccomodationAddRateSuccessfulComponent } from './add-accomodation-add-rate-successful.component';

describe('AddAccomodationAddRateSuccessfulComponent', () => {
  let component: AddAccomodationAddRateSuccessfulComponent;
  let fixture: ComponentFixture<AddAccomodationAddRateSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccomodationAddRateSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccomodationAddRateSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
