import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccomodationConfirmationComponent } from './add-accomodation-confirmation.component';

describe('AddAccomodationConfirmationComponent', () => {
  let component: AddAccomodationConfirmationComponent;
  let fixture: ComponentFixture<AddAccomodationConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccomodationConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccomodationConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
