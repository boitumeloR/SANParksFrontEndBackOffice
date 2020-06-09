import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationImagesComponent } from './accommodation-images.component';

describe('AccommodationImagesComponent', () => {
  let component: AccommodationImagesComponent;
  let fixture: ComponentFixture<AccommodationImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommodationImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
