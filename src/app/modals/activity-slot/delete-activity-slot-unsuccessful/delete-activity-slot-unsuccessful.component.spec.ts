import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActivitySlotUnsuccessfulComponent } from './delete-activity-slot-unsuccessful.component';

describe('DeleteActivitySlotUnsuccessfulComponent', () => {
  let component: DeleteActivitySlotUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteActivitySlotUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteActivitySlotUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteActivitySlotUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
