import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAmenityPenaltySuccessfulComponent } from './delete-amenity-penalty-successful.component';

describe('DeleteAmenityPenaltySuccessfulComponent', () => {
  let component: DeleteAmenityPenaltySuccessfulComponent;
  let fixture: ComponentFixture<DeleteAmenityPenaltySuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAmenityPenaltySuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAmenityPenaltySuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
