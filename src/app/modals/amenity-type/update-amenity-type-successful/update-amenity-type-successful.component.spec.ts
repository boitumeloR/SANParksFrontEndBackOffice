import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAmenityTypeSuccessfulComponent } from './update-amenity-type-successful.component';

describe('UpdateAmenityTypeSuccessfulComponent', () => {
  let component: UpdateAmenityTypeSuccessfulComponent;
  let fixture: ComponentFixture<UpdateAmenityTypeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAmenityTypeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAmenityTypeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
