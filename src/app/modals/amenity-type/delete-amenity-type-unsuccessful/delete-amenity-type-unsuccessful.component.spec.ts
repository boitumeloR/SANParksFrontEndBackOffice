import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAmenityTypeUnsuccessfulComponent } from './delete-amenity-type-unsuccessful.component';

describe('DeleteAmenityTypeUnsuccessfulComponent', () => {
  let component: DeleteAmenityTypeUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteAmenityTypeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAmenityTypeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAmenityTypeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
