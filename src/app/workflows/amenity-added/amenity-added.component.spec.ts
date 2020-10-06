import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenityAddedComponent } from './amenity-added.component';

describe('AmenityAddedComponent', () => {
  let component: AmenityAddedComponent;
  let fixture: ComponentFixture<AmenityAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmenityAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmenityAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
