import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmenityConfirmationComponent } from './add-amenity-confirmation.component';

describe('AddAmenityConfirmationComponent', () => {
  let component: AddAmenityConfirmationComponent;
  let fixture: ComponentFixture<AddAmenityConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAmenityConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAmenityConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
