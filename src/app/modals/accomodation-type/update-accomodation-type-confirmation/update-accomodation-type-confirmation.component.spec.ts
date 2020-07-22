import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccomodationTypeConfirmationComponent } from './update-accomodation-type-confirmation.component';

describe('UpdateAccomodationTypeConfirmationComponent', () => {
  let component: UpdateAccomodationTypeConfirmationComponent;
  let fixture: ComponentFixture<UpdateAccomodationTypeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccomodationTypeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccomodationTypeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
