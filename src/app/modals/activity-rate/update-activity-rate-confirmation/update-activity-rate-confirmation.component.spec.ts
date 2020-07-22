import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivityRateConfirmationComponent } from './update-activity-rate-confirmation.component';

describe('UpdateActivityRateConfirmationComponent', () => {
  let component: UpdateActivityRateConfirmationComponent;
  let fixture: ComponentFixture<UpdateActivityRateConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateActivityRateConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActivityRateConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
