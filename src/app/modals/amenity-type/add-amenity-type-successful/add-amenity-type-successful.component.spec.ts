import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmenityTypeSuccessfulComponent } from './add-amenity-type-successful.component';

describe('AddAmenityTypeSuccessfulComponent', () => {
  let component: AddAmenityTypeSuccessfulComponent;
  let fixture: ComponentFixture<AddAmenityTypeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAmenityTypeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAmenityTypeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
