import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccomodationTypeSuccessfulComponent } from './update-accomodation-type-successful.component';

describe('UpdateAccomodationTypeSuccessfulComponent', () => {
  let component: UpdateAccomodationTypeSuccessfulComponent;
  let fixture: ComponentFixture<UpdateAccomodationTypeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccomodationTypeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccomodationTypeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
