import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccomodationAddRateSuccessfulComponent } from './update-accomodation-add-rate-successful.component';

describe('UpdateAccomodationAddRateSuccessfulComponent', () => {
  let component: UpdateAccomodationAddRateSuccessfulComponent;
  let fixture: ComponentFixture<UpdateAccomodationAddRateSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccomodationAddRateSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccomodationAddRateSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
