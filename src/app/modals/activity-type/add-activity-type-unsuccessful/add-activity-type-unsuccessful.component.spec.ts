import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivityTypeUnsuccessfulComponent } from './add-activity-type-unsuccessful.component';

describe('AddActivityTypeUnsuccessfulComponent', () => {
  let component: AddActivityTypeUnsuccessfulComponent;
  let fixture: ComponentFixture<AddActivityTypeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivityTypeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivityTypeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
