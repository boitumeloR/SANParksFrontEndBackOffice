import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivityTypeConfirmationComponent } from './add-activity-type-confirmation.component';

describe('AddActivityTypeConfirmationComponent', () => {
  let component: AddActivityTypeConfirmationComponent;
  let fixture: ComponentFixture<AddActivityTypeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivityTypeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivityTypeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
