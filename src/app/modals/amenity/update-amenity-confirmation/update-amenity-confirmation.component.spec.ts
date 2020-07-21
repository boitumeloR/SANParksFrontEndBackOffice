import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAmenityConfirmationComponent } from './update-amenity-confirmation.component';

describe('UpdateAmenityConfirmationComponent', () => {
  let component: UpdateAmenityConfirmationComponent;
  let fixture: ComponentFixture<UpdateAmenityConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAmenityConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAmenityConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
