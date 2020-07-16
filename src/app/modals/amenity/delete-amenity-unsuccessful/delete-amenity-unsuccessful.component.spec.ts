import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAmenityUnsuccessfulComponent } from './delete-amenity-unsuccessful.component';

describe('DeleteAmenityUnsuccessfulComponent', () => {
  let component: DeleteAmenityUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteAmenityUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAmenityUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAmenityUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
