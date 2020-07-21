import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivityConfirmationComponent } from './add-activity-confirmation.component';

describe('AddActivityConfirmationComponent', () => {
  let component: AddActivityConfirmationComponent;
  let fixture: ComponentFixture<AddActivityConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivityConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivityConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
