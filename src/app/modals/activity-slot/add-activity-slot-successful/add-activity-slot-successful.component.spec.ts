import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivitySlotSuccessfulComponent } from './add-activity-slot-successful.component';

describe('AddActivitySlotSuccessfulComponent', () => {
  let component: AddActivitySlotSuccessfulComponent;
  let fixture: ComponentFixture<AddActivitySlotSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivitySlotSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivitySlotSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
