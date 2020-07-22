import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmenityPenaltyUnsuccessfulComponent } from './add-amenity-penalty-unsuccessful.component';

describe('AddAmenityPenaltyUnsuccessfulComponent', () => {
  let component: AddAmenityPenaltyUnsuccessfulComponent;
  let fixture: ComponentFixture<AddAmenityPenaltyUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAmenityPenaltyUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAmenityPenaltyUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
