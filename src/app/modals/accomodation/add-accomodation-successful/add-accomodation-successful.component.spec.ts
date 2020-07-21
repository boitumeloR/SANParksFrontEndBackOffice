import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccomodationSuccessfulComponent } from './add-accomodation-successful.component';

describe('AddAccomodationSuccessfulComponent', () => {
  let component: AddAccomodationSuccessfulComponent;
  let fixture: ComponentFixture<AddAccomodationSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccomodationSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccomodationSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
