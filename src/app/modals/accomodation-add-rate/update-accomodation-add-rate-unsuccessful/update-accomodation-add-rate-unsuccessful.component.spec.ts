import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccomodationAddRateUnsuccessfulComponent } from './update-accomodation-add-rate-unsuccessful.component';

describe('UpdateAccomodationAddRateUnsuccessfulComponent', () => {
  let component: UpdateAccomodationAddRateUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateAccomodationAddRateUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccomodationAddRateUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccomodationAddRateUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
