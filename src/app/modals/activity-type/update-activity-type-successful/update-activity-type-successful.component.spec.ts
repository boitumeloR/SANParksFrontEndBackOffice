import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivityTypeSuccessfulComponent } from './update-activity-type-successful.component';

describe('UpdateActivityTypeSuccessfulComponent', () => {
  let component: UpdateActivityTypeSuccessfulComponent;
  let fixture: ComponentFixture<UpdateActivityTypeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateActivityTypeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActivityTypeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
