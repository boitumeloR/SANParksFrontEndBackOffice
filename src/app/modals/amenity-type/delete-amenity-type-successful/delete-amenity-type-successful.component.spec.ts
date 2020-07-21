import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAmenityTypeSuccessfulComponent } from './delete-amenity-type-successful.component';

describe('DeleteAmenityTypeSuccessfulComponent', () => {
  let component: DeleteAmenityTypeSuccessfulComponent;
  let fixture: ComponentFixture<DeleteAmenityTypeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAmenityTypeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAmenityTypeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
