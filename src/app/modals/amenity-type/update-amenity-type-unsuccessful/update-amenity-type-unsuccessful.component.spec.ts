import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAmenityTypeUnsuccessfulComponent } from './update-amenity-type-unsuccessful.component';

describe('UpdateAmenityTypeUnsuccessfulComponent', () => {
  let component: UpdateAmenityTypeUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateAmenityTypeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAmenityTypeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAmenityTypeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
