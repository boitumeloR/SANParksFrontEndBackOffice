import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccomodationUnsuccessfulComponent } from './update-accomodation-unsuccessful.component';

describe('UpdateAccomodationUnsuccessfulComponent', () => {
  let component: UpdateAccomodationUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateAccomodationUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccomodationUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccomodationUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
