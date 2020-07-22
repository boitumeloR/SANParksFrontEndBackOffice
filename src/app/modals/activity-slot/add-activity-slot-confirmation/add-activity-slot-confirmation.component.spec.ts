import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivitySlotConfirmationComponent } from './add-activity-slot-confirmation.component';

describe('AddActivitySlotConfirmationComponent', () => {
  let component: AddActivitySlotConfirmationComponent;
  let fixture: ComponentFixture<AddActivitySlotConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivitySlotConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivitySlotConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
