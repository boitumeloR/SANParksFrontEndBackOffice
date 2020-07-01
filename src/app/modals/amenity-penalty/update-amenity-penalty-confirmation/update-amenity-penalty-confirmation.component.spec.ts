import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAmenityPenaltyConfirmationComponent } from './update-amenity-penalty-confirmation.component';

describe('UpdateAmenityPenaltyConfirmationComponent', () => {
  let component: UpdateAmenityPenaltyConfirmationComponent;
  let fixture: ComponentFixture<UpdateAmenityPenaltyConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAmenityPenaltyConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAmenityPenaltyConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
