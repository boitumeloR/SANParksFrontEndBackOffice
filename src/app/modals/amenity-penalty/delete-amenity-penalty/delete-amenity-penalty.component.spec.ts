import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAmenityPenaltyComponent } from './delete-amenity-penalty.component';

describe('DeleteAmenityPenaltyComponent', () => {
  let component: DeleteAmenityPenaltyComponent;
  let fixture: ComponentFixture<DeleteAmenityPenaltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAmenityPenaltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAmenityPenaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
