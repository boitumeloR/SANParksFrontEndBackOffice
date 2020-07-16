import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccomodationTypeUnsuccessfulComponent } from './add-accomodation-type-unsuccessful.component';

describe('AddAccomodationTypeUnsuccessfulComponent', () => {
  let component: AddAccomodationTypeUnsuccessfulComponent;
  let fixture: ComponentFixture<AddAccomodationTypeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccomodationTypeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccomodationTypeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
