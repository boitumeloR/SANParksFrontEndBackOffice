import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAmenityPenaltyUnsuccessfulComponent } from './delete-amenity-penalty-unsuccessful.component';

describe('DeleteAmenityPenaltyUnsuccessfulComponent', () => {
  let component: DeleteAmenityPenaltyUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteAmenityPenaltyUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAmenityPenaltyUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAmenityPenaltyUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
