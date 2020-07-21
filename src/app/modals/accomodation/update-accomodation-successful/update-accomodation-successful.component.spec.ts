import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccomodationSuccessfulComponent } from './update-accomodation-successful.component';

describe('UpdateAccomodationSuccessfulComponent', () => {
  let component: UpdateAccomodationSuccessfulComponent;
  let fixture: ComponentFixture<UpdateAccomodationSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccomodationSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccomodationSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
