import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignAccommodationComponent } from './assign-accommodation.component';

describe('AssignAccommodationComponent', () => {
  let component: AssignAccommodationComponent;
  let fixture: ComponentFixture<AssignAccommodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignAccommodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
