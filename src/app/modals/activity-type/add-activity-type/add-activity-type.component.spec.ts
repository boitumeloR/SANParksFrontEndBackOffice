import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivityTypeComponent } from './add-activity-type.component';

describe('AddActivityTypeComponent', () => {
  let component: AddActivityTypeComponent;
  let fixture: ComponentFixture<AddActivityTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivityTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivityTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
