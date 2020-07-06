import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmenitySuccessfulComponent } from './add-amenity-successful.component';

describe('AddAmenitySuccessfulComponent', () => {
  let component: AddAmenitySuccessfulComponent;
  let fixture: ComponentFixture<AddAmenitySuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAmenitySuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAmenitySuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
