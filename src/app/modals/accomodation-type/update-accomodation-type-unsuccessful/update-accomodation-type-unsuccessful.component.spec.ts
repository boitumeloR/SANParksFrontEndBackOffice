import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccomodationTypeUnsuccessfulComponent } from './update-accomodation-type-unsuccessful.component';

describe('UpdateAccomodationTypeUnsuccessfulComponent', () => {
  let component: UpdateAccomodationTypeUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateAccomodationTypeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccomodationTypeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccomodationTypeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
