import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccommodationTypeComponent } from './update-accommodation-type.component';

describe('UpdateAccommodationTypeComponent', () => {
  let component: UpdateAccommodationTypeComponent;
  let fixture: ComponentFixture<UpdateAccommodationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccommodationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccommodationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
