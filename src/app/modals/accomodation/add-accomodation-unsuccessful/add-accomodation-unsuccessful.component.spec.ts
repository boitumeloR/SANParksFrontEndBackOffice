import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccomodationUnsuccessfulComponent } from './add-accomodation-unsuccessful.component';

describe('AddAccomodationUnsuccessfulComponent', () => {
  let component: AddAccomodationUnsuccessfulComponent;
  let fixture: ComponentFixture<AddAccomodationUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccomodationUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccomodationUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
