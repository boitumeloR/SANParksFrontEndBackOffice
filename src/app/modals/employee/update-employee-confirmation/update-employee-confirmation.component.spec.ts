import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeConfirmationComponent } from './update-employee-confirmation.component';

describe('UpdateEmployeeConfirmationComponent', () => {
  let component: UpdateEmployeeConfirmationComponent;
  let fixture: ComponentFixture<UpdateEmployeeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
