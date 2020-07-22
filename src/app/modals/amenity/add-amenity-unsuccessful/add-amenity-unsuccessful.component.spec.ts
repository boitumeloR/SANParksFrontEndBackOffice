import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmenityUnsuccessfulComponent } from './add-amenity-unsuccessful.component';

describe('AddAmenityUnsuccessfulComponent', () => {
  let component: AddAmenityUnsuccessfulComponent;
  let fixture: ComponentFixture<AddAmenityUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAmenityUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAmenityUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
