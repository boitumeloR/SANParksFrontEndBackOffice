import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivityTypeSuccessfulComponent } from './add-activity-type-successful.component';

describe('AddActivityTypeSuccessfulComponent', () => {
  let component: AddActivityTypeSuccessfulComponent;
  let fixture: ComponentFixture<AddActivityTypeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivityTypeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivityTypeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
