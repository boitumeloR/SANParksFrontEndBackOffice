import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivityTypeConfirmationComponent } from './update-activity-type-confirmation.component';

describe('UpdateActivityTypeConfirmationComponent', () => {
  let component: UpdateActivityTypeConfirmationComponent;
  let fixture: ComponentFixture<UpdateActivityTypeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateActivityTypeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActivityTypeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
