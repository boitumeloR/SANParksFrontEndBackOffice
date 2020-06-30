import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccomodationTypeConfirmationComponent } from './add-accomodation-type-confirmation.component';

describe('AddAccomodationTypeConfirmationComponent', () => {
  let component: AddAccomodationTypeConfirmationComponent;
  let fixture: ComponentFixture<AddAccomodationTypeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccomodationTypeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccomodationTypeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
