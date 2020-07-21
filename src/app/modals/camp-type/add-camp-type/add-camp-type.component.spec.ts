import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampTypeComponent } from './add-camp-type.component';

describe('AddCampTypeComponent', () => {
  let component: AddCampTypeComponent;
  let fixture: ComponentFixture<AddCampTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCampTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCampTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
