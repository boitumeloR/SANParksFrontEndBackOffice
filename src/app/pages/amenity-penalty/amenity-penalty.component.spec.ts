import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenityPenaltyComponent } from './amenity-penalty.component';

describe('AmenityPenaltyComponent', () => {
  let component: AmenityPenaltyComponent;
  let fixture: ComponentFixture<AmenityPenaltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmenityPenaltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmenityPenaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
