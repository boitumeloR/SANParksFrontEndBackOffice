import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeConfirmationComponent } from './add-employee-confirmation.component';

describe('AddEmployeeConfirmationComponent', () => {
  let component: AddEmployeeConfirmationComponent;
  let fixture: ComponentFixture<AddEmployeeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
