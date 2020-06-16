import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAmenityPenaltyComponent } from './update-amenity-penalty.component';

describe('UpdateAmenityPenaltyComponent', () => {
  let component: UpdateAmenityPenaltyComponent;
  let fixture: ComponentFixture<UpdateAmenityPenaltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAmenityPenaltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAmenityPenaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
