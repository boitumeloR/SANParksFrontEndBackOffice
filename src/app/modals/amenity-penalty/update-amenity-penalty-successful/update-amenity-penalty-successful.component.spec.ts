import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAmenityPenaltySuccessfulComponent } from './update-amenity-penalty-successful.component';

describe('UpdateAmenityPenaltySuccessfulComponent', () => {
  let component: UpdateAmenityPenaltySuccessfulComponent;
  let fixture: ComponentFixture<UpdateAmenityPenaltySuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAmenityPenaltySuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAmenityPenaltySuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
