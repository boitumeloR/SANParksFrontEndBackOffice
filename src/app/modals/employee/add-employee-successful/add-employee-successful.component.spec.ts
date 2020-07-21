import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeSuccessfulComponent } from './add-employee-successful.component';

describe('AddEmployeeSuccessfulComponent', () => {
  let component: AddEmployeeSuccessfulComponent;
  let fixture: ComponentFixture<AddEmployeeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
