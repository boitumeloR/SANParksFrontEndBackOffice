import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAmenityComponent } from './view-amenity.component';

describe('ViewAmenityComponent', () => {
  let component: ViewAmenityComponent;
  let fixture: ComponentFixture<ViewAmenityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAmenityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAmenityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
