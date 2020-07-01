import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAmenityPenaltyComponent } from './view-amenity-penalty.component';

describe('ViewAmenityPenaltyComponent', () => {
  let component: ViewAmenityPenaltyComponent;
  let fixture: ComponentFixture<ViewAmenityPenaltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAmenityPenaltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAmenityPenaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
