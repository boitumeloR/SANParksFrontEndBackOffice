import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivityRateConfirmationComponent } from './add-activity-rate-confirmation.component';

describe('AddActivityRateConfirmationComponent', () => {
  let component: AddActivityRateConfirmationComponent;
  let fixture: ComponentFixture<AddActivityRateConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivityRateConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivityRateConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
