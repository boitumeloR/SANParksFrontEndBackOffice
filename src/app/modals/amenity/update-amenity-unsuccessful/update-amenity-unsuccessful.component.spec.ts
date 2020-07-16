import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAmenityUnsuccessfulComponent } from './update-amenity-unsuccessful.component';

describe('UpdateAmenityUnsuccessfulComponent', () => {
  let component: UpdateAmenityUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateAmenityUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAmenityUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAmenityUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
