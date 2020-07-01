import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmenityPenaltyComponent } from './add-amenity-penalty.component';

describe('AddAmenityPenaltyComponent', () => {
  let component: AddAmenityPenaltyComponent;
  let fixture: ComponentFixture<AddAmenityPenaltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAmenityPenaltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAmenityPenaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
