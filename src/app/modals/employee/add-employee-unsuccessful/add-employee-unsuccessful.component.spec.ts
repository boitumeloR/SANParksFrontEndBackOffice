import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeUnsuccessfulComponent } from './add-employee-unsuccessful.component';

describe('AddEmployeeUnsuccessfulComponent', () => {
  let component: AddEmployeeUnsuccessfulComponent;
  let fixture: ComponentFixture<AddEmployeeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
