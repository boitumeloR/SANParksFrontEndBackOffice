import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccomodationTypeComponent } from './add-accomodation-type.component';

describe('AddAccomodationTypeComponent', () => {
  let component: AddAccomodationTypeComponent;
  let fixture: ComponentFixture<AddAccomodationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccomodationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccomodationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
