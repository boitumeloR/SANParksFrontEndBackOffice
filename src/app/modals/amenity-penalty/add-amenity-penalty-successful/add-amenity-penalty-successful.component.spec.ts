import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmenityPenaltySuccessfulComponent } from './add-amenity-penalty-successful.component';

describe('AddAmenityPenaltySuccessfulComponent', () => {
  let component: AddAmenityPenaltySuccessfulComponent;
  let fixture: ComponentFixture<AddAmenityPenaltySuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAmenityPenaltySuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAmenityPenaltySuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
