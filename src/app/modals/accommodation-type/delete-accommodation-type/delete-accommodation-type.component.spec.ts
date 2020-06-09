import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccommodationTypeComponent } from './delete-accommodation-type.component';

describe('DeleteAccommodationTypeComponent', () => {
  let component: DeleteAccommodationTypeComponent;
  let fixture: ComponentFixture<DeleteAccommodationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAccommodationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccommodationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
