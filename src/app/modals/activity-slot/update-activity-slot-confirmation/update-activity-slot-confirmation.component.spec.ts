import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivitySlotConfirmationComponent } from './update-activity-slot-confirmation.component';

describe('UpdateActivitySlotConfirmationComponent', () => {
  let component: UpdateActivitySlotConfirmationComponent;
  let fixture: ComponentFixture<UpdateActivitySlotConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateActivitySlotConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActivitySlotConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
