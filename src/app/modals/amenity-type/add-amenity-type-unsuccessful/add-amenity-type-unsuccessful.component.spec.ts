import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmenityTypeUnsuccessfulComponent } from './add-amenity-type-unsuccessful.component';

describe('AddAmenityTypeUnsuccessfulComponent', () => {
  let component: AddAmenityTypeUnsuccessfulComponent;
  let fixture: ComponentFixture<AddAmenityTypeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAmenityTypeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAmenityTypeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
