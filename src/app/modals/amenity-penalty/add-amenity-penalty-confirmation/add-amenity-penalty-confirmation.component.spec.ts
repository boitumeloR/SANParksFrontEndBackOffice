import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmenityPenaltyConfirmationComponent } from './add-amenity-penalty-confirmation.component';

describe('AddAmenityPenaltyConfirmationComponent', () => {
  let component: AddAmenityPenaltyConfirmationComponent;
  let fixture: ComponentFixture<AddAmenityPenaltyConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAmenityPenaltyConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAmenityPenaltyConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
