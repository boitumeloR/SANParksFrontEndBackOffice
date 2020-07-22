import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActivityRateSuccessfulComponent } from './delete-activity-rate-successful.component';

describe('DeleteActivityRateSuccessfulComponent', () => {
  let component: DeleteActivityRateSuccessfulComponent;
  let fixture: ComponentFixture<DeleteActivityRateSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteActivityRateSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteActivityRateSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
