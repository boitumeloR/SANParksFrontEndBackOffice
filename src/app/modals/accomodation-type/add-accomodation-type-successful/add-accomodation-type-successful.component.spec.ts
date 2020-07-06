import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccomodationTypeSuccessfulComponent } from './add-accomodation-type-successful.component';

describe('AddAccomodationTypeSuccessfulComponent', () => {
  let component: AddAccomodationTypeSuccessfulComponent;
  let fixture: ComponentFixture<AddAccomodationTypeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccomodationTypeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccomodationTypeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
