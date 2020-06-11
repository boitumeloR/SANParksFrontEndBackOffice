import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivityRateComponent } from './update-activity-rate.component';

describe('UpdateActivityRateComponent', () => {
  let component: UpdateActivityRateComponent;
  let fixture: ComponentFixture<UpdateActivityRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateActivityRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActivityRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
