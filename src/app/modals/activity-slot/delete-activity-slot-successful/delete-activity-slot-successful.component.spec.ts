import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActivitySlotSuccessfulComponent } from './delete-activity-slot-successful.component';

describe('DeleteActivitySlotSuccessfulComponent', () => {
  let component: DeleteActivitySlotSuccessfulComponent;
  let fixture: ComponentFixture<DeleteActivitySlotSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteActivitySlotSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteActivitySlotSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
