import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActivityRateUnsuccessfulComponent } from './delete-activity-rate-unsuccessful.component';

describe('DeleteActivityRateUnsuccessfulComponent', () => {
  let component: DeleteActivityRateUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteActivityRateUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteActivityRateUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteActivityRateUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
