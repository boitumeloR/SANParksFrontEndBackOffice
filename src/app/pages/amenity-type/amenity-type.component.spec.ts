import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenityTypeComponent } from './amenity-type.component';

describe('AmenityTypeComponent', () => {
  let component: AmenityTypeComponent;
  let fixture: ComponentFixture<AmenityTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmenityTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmenityTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
