import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAmenityPenaltyUnsuccessfulComponent } from './update-amenity-penalty-unsuccessful.component';

describe('UpdateAmenityPenaltyUnsuccessfulComponent', () => {
  let component: UpdateAmenityPenaltyUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateAmenityPenaltyUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAmenityPenaltyUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAmenityPenaltyUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
