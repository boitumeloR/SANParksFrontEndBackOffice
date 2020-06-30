import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccomodationConfirmationComponent } from './update-accomodation-confirmation.component';

describe('UpdateAccomodationConfirmationComponent', () => {
  let component: UpdateAccomodationConfirmationComponent;
  let fixture: ComponentFixture<UpdateAccomodationConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccomodationConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccomodationConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
