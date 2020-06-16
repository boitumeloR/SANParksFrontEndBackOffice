import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAmenityComponent } from './update-amenity.component';

describe('UpdateAmenityComponent', () => {
  let component: UpdateAmenityComponent;
  let fixture: ComponentFixture<UpdateAmenityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAmenityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAmenityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
