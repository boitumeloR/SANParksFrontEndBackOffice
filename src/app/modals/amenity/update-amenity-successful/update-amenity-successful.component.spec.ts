import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAmenitySuccessfulComponent } from './update-amenity-successful.component';

describe('UpdateAmenitySuccessfulComponent', () => {
  let component: UpdateAmenitySuccessfulComponent;
  let fixture: ComponentFixture<UpdateAmenitySuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAmenitySuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAmenitySuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
