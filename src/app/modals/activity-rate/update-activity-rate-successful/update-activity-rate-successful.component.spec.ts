import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivityRateSuccessfulComponent } from './update-activity-rate-successful.component';

describe('UpdateActivityRateSuccessfulComponent', () => {
  let component: UpdateActivityRateSuccessfulComponent;
  let fixture: ComponentFixture<UpdateActivityRateSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateActivityRateSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActivityRateSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
