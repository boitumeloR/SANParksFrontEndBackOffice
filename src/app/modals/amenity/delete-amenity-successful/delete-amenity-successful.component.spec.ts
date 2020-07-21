import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAmenitySuccessfulComponent } from './delete-amenity-successful.component';

describe('DeleteAmenitySuccessfulComponent', () => {
  let component: DeleteAmenitySuccessfulComponent;
  let fixture: ComponentFixture<DeleteAmenitySuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAmenitySuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAmenitySuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
