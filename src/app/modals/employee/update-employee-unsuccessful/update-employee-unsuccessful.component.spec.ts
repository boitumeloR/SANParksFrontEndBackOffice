import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeUnsuccessfulComponent } from './update-employee-unsuccessful.component';

describe('UpdateEmployeeUnsuccessfulComponent', () => {
  let component: UpdateEmployeeUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateEmployeeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
