import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivitySlotUnsuccessfulComponent } from './add-activity-slot-unsuccessful.component';

describe('AddActivitySlotUnsuccessfulComponent', () => {
  let component: AddActivitySlotUnsuccessfulComponent;
  let fixture: ComponentFixture<AddActivitySlotUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivitySlotUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivitySlotUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
